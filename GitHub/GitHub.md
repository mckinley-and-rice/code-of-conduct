

## keep a changelog

### How do I make a good changelog?

* Guiding Principles
* Changelogs are for humans, not machines.
* There should be an entry for every single version.
* The same types of changes should be grouped.
* Versions and sections should be linkable.
* The latest version comes first.
* The release date of each version is displayed.
* Mention whether you follow Semantic Versioning.

### Types of changes

```Add ``` for new features.

```Change ``` for changes in existing functionality.

```Deprecate ``` for soon-to-be removed features.

```Remove ``` for now removed features.

```Fixe ``` for any bug fixes.

```Security```  in case of vulnerabilities.


### Blank Template for each commit as same as change log

Add :
Change :
Deprecate :
Remove :
Fixe :
Security :


### Commit Standard

* Everyone should commit in their own branch before merging it to the main branch
* Take the destination branch pull into your branch before merging it
* The commit message should follow the standard: _<Ticket Number> : <Purpose of Commit>_
* You should commit after every ticket / feature


### Branch Standards

## Main Branch
* Never commit directly ro the main branch
* For the tasks, create a new branch out of your main branch
* Always take pull from the target branch before mergint it

## Bug/Hotfix Branch
* If there is sudden change or any bug that needs to be fixed, create a hotfix branch out of your target branch
* The branch should have <hotfix> keywork in it
