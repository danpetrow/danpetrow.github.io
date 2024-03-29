---
layout: post
author: dan
permalink: /:title/
---
Today I used Git again. I made quite a few mistakes already with git that caused my remote branches and my local branches to be in a bad state. Luckily, I created remote and local staging branches and managed to keep in tact.

What I learned tonight is the importance of deleting local branches when you are done with them because they cause problems if you leave them and don't know exactly what you are doing. Here are some commands to remember.
<ul>
<li>git checkout -b "branch" - This creates a new local branch.</li>
<li>git push origin "branch" - This creates a new remote branch.</li>
<li>git pull origin "branch" - This will take remote "branch" and make your local working branch look like remote "branch"</li>
<li>git push origin --delete "branch" - This will delete a remote branch.</li>
<li>git branch -D "branch" - This will delete a local branch.</li>
<li>git branch - This lists our local branches and highlights our current branch.</li>
<li>git branch -a - This lists all of our branches</li>
<li>git branch status - This lists what branch we are on as well as any changes to commit.</li>
<li>git reset --hard - discard local changes and restore yourself back to the last commit.
</ul>

Also keep a staging branch both locally and remotely that you only touch when you are sure that your commits won't break anything.