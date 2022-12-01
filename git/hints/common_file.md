#### ================= Preconditions: Init repo =================

| No  | Step                                                                                                                                                                                            |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Create a private repo, add README.md. .gitignore (with a pattern for your programming language) when creating a repo.<br/> Navigate to commit history, check that 'Initital commit' is present. |
| 2   | Set up branch deletion after Pull Request (PR) is merged.                                                                                                                                       |
| 3   | Grant an access to the repository to the reviewer (collaborators tab)                                                                                                                           |
| 4   | Clone a project in your IDE.                                                                                                                                                                    |

#### ================= EASY SCENARIOS =================<br/>
------- Create Branch -------<br/>

| No  | Step | Expected result                             |
|-----| --- |---------------------------------------------------------------------------------------------|
| 1   | In a lower right corner of a Git submenu click on Left Mouse Key <main> New branch from selected | |
| 2   | Name a new branch <branch_name> | Check that branch was created locally;<br/> Check that GitHub doesn't have this branch yet. |
| 3   | Push your changes | Navigate to the GitHub and check that local|

------- Add+Push Commit ------ <br/>

| No          | Step   | Expected result                                                                                                                                                                                                                                                               |
|-------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| (pre-steps) | Add any file <file_name> to the created branch. If IDE asks you if you want to add it the tracked file - do not agree. | Added file is highlighted in red (meaning, it is untracked)                                                                                                                                                                                                                   |
| 1           | Add the `feature.txt` file to the staging area. | Check that file was added to the staging area                                                                                                                                                                                                                                 |
| 2           | Add file as a tracked one (Right click git add) | File is highlighted in green                                                                                                                                                                                                                                                  |
| 3           | Create a commit with a message 'Push commit'        | File is no longer highlighted                                                                                                                                                                                                                                                 |
| 4           | Push your commit. Open Git tab, select current branch.  | In a middle part of a commit history window there is a new 'Push commit'. <br/> Check that in a right part of a window there;s a needed file <file_name>.<br/> Navigate to GitHub, check that needed branch now has a file <file_name> and there is a 'Push commit' in a commit history. |

------- Edit commit -------<br/>

| No          | Step   | Expected result |
|-------------|-----------|----------------------------------|
| (pre-steps)  | Perform steps (pre-steps, 1-3) of scenario 'Add+Push Commit' |  |
| 1          | Open Git tab, select current branch, Right click on the last commit edit commit message (F2) 'Add file <file_name>' | In a git tab there is now an updated message for the  last commit. |
| 2          | Do any changes to the file. Create commit with a flag 'Amend', message of a commit leave as it is. | In a git tab no new commit, message of a last commit did not change, commit now has latest changes. |
| 3          | Push your commit.  | Navigate to GitHub, check that needed branch has file <file_name> with changes from step 2. History of commits has only: 'Initial commit' and 'Add file <file_name>' |

#### ================= MEDIUM SCENARIOS =================<br/>
------- Change Author -------<br/>

| No          | Step                                                         | Expected result |
|-------------|--------------------------------------------------------------|----------------------------------|
| (pre-steps) | Complete scenario (Add+Push Commit)                          |  |
| 1           | Change author's name and email                               |  |
| 2           | Perform steps (pre-steps, 1-3) of scenario 'Add+Push Commit' | In a git tab check, that name of author and email for the last commit has changed. Navigate to GitHub, check same fields there as well.  |
| 3           | Return to previously set name and email.Repeat step 2.       |  |

------- Reset branch to commit -------<br/>

| No          | Step                                                       | Expected result |
|-------------|------------------------------------------------------------|----------------------------------|
| (pre-steps) | Complete scenario (Add+Push Commit)                        |  |
| 1           | Open git tab, select current branch Select 'Initial commit' Right click Reset current branch to Here...(Hard) | Check that commit history now has only 'Initial commit'. File <file_name> is not present. |
| 2           | Add file once again. Create a commit with message 'Push commit 1' Do any changes to the file, create another commit with a message 'Push commit 2' | Check that both commits are present in a history |
| 3           | Repeat step 1                  |  |

------- Squash Commit's -------<br/>

| No          | Step                                                       | Expected result |
|-------------|------------------------------------------------------------|----------------------------------|
| (pre-steps) | Perform steps (pre-steps, 1, 2, 3) of scenario 'Add+Push Commit'                        |  |
| 1           | Do any changes to a file, create another commit with message 'Push commit <1>' Repeat 3 times |All 3 commits are present in commit history  |
| 2           | Open git tab, select current branch Select all commit 'Push commit <N>' RIght click Squash commits leave only the last commit's message  |Commit history in IDE now has only 'Initial commit' and 'Push commi <3>'|
| 3           | Push your changes.                       | Navigate to GitHub, check that needed branch now has file<file_name> with changes from last iteration of step 1. Check that commit history has only 'Initial commit' and 'Push commit <3>' |

------- Rebase-------<br/>

| No          | Step                                                             | Expected result |
|-------------|------------------------------------------------------------------|----------------------------------|
| (pre-steps) | Complete scenario Add+Push Commit                                |  |
| 1           | Switch to <main> branch. Add new file Commit Push                |Navigate to Github, check that branch<main> now has a new file and a new commit has appeared in history.|
| 2           | In IDE switch back to the branch created in pre-steps. Get the latest changes from <main> into the current branch by navigating to Git tab <main> branch Right click Merge into current | Check that branching graph has now a ew branch with a new commit from <main> + new Merge commit |
| 3           | Undo Merge (scenario Reset branch to commit) | Check that history has no commits fromstep 2 |
| 4           | Rebase current branch by the <main> branch: <main> branch Right click Rebase current onto Selected | Check that the commit from currentbranch was transfered to the last commit of <main> branch. |
