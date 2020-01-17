from django.db import models
from users.models import User


class Kid(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    parent = models.ForeignKey(
        User, related_name='kids', on_delete=models.CASCADE)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    foot_size = models.FloatField(blank=True, null=True)
    description = models.CharField(blank=True, max_length=255, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class StyleQuiz(models.Model):
    kid = models.ForeignKey(Kid, related_name='quizzes',
                            on_delete=models.CASCADE)
    quiz_code = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.quiz_code


class QuizChoice(models.Model):
    quiz = models.ForeignKey(StyleQuiz, related_name='choices',
                             on_delete=models.CASCADE)
    answer_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.answer_code