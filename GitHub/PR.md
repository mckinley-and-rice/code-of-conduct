
Pull requests let you suggest that changes from one branch be merged into another branch. For example, if you forked a repository and made changes to your fork’s bug-fix branch, you could open a pull request to suggest that those changes be merged into the upstream repository’s master branch. Pull requests also let you discuss these changes with project maintainers and other contributors. For more information, see “[About pull requests 59](https://help.github.com/articles/about-pull-requests/).”

Let’s explore how to create, review, merge, and manage pull requests easily and effectively.

Creating pull requests

The first step to using pull requests is to create one! You can learn how in “[Creating a pull request 82](https://help.github.com/articles/creating-a-pull-request/).” Here are some ideas for enhancing the process.

Using templates

Pull request templates let you customize and standardize the information you’d like to be included when contributors create pull requests. When you add a pull request template to your repository, project contributors will automatically see the template’s contents in the pull request body. For more information, see “[Creating a pull request template for your repository 87](https://help.github.com/articles/creating-a-pull-request-template-for-your-repository/).”

You can use these templates in many ways. One idea is to include a list of tasks you’d like authors to complete before merging their pull requests:

[![image](https://user-images.githubusercontent.com/14935376/36037755-5696d482-0d83-11e8-9000-8a1d4435ecc3.png)

For more information, see “[About task lists 32](https://help.github.com/articles/about-task-lists/).”

You might also request that contributors include an issue reference in their pull request body, so that merging the pull request will automatically close the issue. For more information, see “[Closing issues using keywords 27](https://help.github.com/articles/closing-issues-using-keywords/).”

You can use multiple pull request templates to address different needs. For example, you might request different information if changes are suggested for your master branch than if changes are suggested for your gh-pages branch.

To use multiple templates, you’ll need to add the template query parameter to the URL for a new pull request. We suggest including these URLs in your CONTRIBUTING.md or README.md files. You can add more query parameters to these URLs to automatically add a title, labels, or assignees to the pull request or add the pull request to a project board or milestone. For more information see “[About automation for issues and pull requests with query parameters 20](https://help.github.com/articles/about-automation-for-issues-and-pull-requests-with-query-parameters/).”

Allowing maintainers to edit your branch

Creating your pull request from a fork? We suggest allowing edits from maintainers. Then, anyone with Write access to the upstream repository will be able to add commits to your branch. This can make the review process easier for maintainers; sometimes it’s quicker for a maintainer to make a small change themselves instead of asking you to make the change.

Learn how to use this feature in “[Allowing changes to a pull request branch created from a fork 35](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/).”

Reviewing pull requests

After you create a pull request, it’s time for others to review your changes! Pull request reviews allow collaborators to comment on the changes in a pull request and either approve those changes or request further changes be made before the pull request is merged. For more information, see “[About pull request reviews 80](https://help.github.com/articles/about-pull-request-reviews/).”

Requesting a review

Anyone with read access to a repository can leave a review. If you want a specific person or team to approve your pull request, you can *request* a review. This is the best way to make sure the right people see your changes! Learn how in “[Requesting a pull request review 40](https://help.github.com/articles/requesting-a-pull-request-review/).”

If a reviewer requests changes to your pull request, you’ll probably want that same reviewer to leave another review after you’ve addressed their concerns. *Just request another review from that reviewer*, following the same steps you used to request the first review. Many people don’t realize this is an option, but it will save the reviewer from periodically checking on your progress themselves!

Using code owners

If you’re a repository maintainer, you might want a specific person or team to approve any changes to a certain part of the code. For example, you might want a technical writer on your team to review any changes to the /docs directory. You can add a CODEOWNERS file to your repository to define code owners for specific files or directories. Code owners are automatically requested to review every pull request that modifies code they own. You can even have different CODEOWNERS files in different branches if, for example, the people who should review changes to the master branch are different than the people who should review changes to the gh-pages branch.

Learn how to use CODEOWNERS files in “[About codeowners 38](https://help.github.com/articles/about-codeowners/).”

Merging pull requests

When all reviews are complete, it’s time to merge your pull request! 🎉 This will apply your changes to the destination branch. Here are a few things to consider when merging pull requests.

Using protected branches

If you’re a repository maintainer, you can use protected branches to prevent pull requests from being merged into important branches, such as master, until certain conditions are met. For example, you can require passing CI tests or an approving review. For more information, see “[About protected branches 22](https://help.github.com/articles/about-protected-branches/).”

Using different merge methods

When you merge a pull request, you’ll see a few merge methods to choose from:

[![image](https://user-images.githubusercontent.com/14935376/36431027-2160b606-161c-11e8-9933-7dc17c2696c3.png)

Different merge methods work for different projects. If you’re a repository maintainer, you can force contributors to use your preferred merge method by disabling the others. For more information, see “[About pull request merge methods 76](https://help.github.com/articles/about-pull-request-merges/).”

Managing your pull requests

You’re probably involved in quite a few pull requests, in multiple repositories, at any given time. We suggest using [http://github.com/pulls 25](http://github.com/pulls) to keep track of all these pull requests. This page lists all the pull requests that you created, are assigned to, were mentioned in, and were requested to review across all of GitHub:

![](https://user-images.githubusercontent.com/14935376/36556176-e28231da-17c9-11e8-878f-5a460d5bf36e.png)

Looking for further learning?

There’s a GitHub Learning Lab course for that! If you’d like to learn more about reviewing pull requests, you can check out our [Reviewing Pull Requests course 66](https://lab.github.com/githubtraining/reviewing-pull-requests). This course dives into how you can get your best work done by identifying when and how to request a review, how to perform a review for someone else’s pull request, and other awesome collaboration methods.

Need help?

We hope these tips make it easier for you to create, review, merge, and manage pull requests. If you have any questions, [let the Support Team know 1](https://github.com/contact)! We’re always happy to help.
