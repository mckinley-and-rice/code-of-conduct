from rest_framework import serializers
from kids.models import Kid, StyleQuiz, QuizChoice


class QuizChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizChoice
        fields = ['id', 'answer_code']


class StyleQuizSerializer(serializers.ModelSerializer):
    choices = QuizChoiceSerializer(many=True)

    class Meta:
        model = StyleQuiz
        fields = ['id', 'quiz_code', 'choices']


class KidSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    quizzes = StyleQuizSerializer(many=True)
    parent = serializers.ReadOnlyField(source='parent.id')

    class Meta:
        model = Kid
        fields = '__all__'
        # fields = ['name', 'parent', 'gender', 'date_of_birth', 'quiz']

    def get_gender(self, obj):
        return obj.get_gender_display()

    def create(self, validated_data):
        quizzes_data = validated_data.pop('quizzes')
        kid = Kid.objects.create(**validated_data)
        for quiz_data in quizzes_data:
            choices_data = quiz_data.pop('choices')
            quiz = StyleQuiz.objects.create(kid=kid, **quiz_data)
            for choice_data in choices_data:
                QuizChoice.objects.create(quiz=quiz, **choice_data)
        return kid

    def update(self, instance, validated_data):
        quizzes = validated_data.pop('quizzes')

        instance.gender = validated_data['gender']
        instance.name = validated_data['name']
        instance.date_of_birth = validated_data['date_of_birth']
        instance.height = validated_data['height']
        instance.weight = validated_data['weight']
        instance.foot_size = validated_data['foot_size']
        instance.description = validated_data['description']
        instance.save()

        for quiz in instance.quizzes.all():
            for choice in quiz.choices.all():
                choice.delete()
            quiz.delete()

        for quiz in quizzes:
            choices_data = quiz.pop('choices')
            q = StyleQuiz.objects.create(**quiz, kid=instance)
            for choice in choices_data:
                QuizChoice.objects.create(quiz=q, **choice)

        return instance
