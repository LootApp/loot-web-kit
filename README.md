### Install as a dependncy
`yarn add git+ssh://git@github.com:LootApp/loot-web-kit.git#master`

If you are having permission issues with this step, you likely need to set up
ssh key associated to your loot github account, follow steps below.

1. Generate ssh key, ideally inside dropbox / icloud so you can retrieve it latter
```
cd ~/Dropbox/Work
ssh-keygen
```
When asked to `Enter file in which to save the key` just type something like GitHub,
or anything you can reference latter as your GitHub ssh key. Leave rest of the steps
empty and just keep pressing enter until all steps are done.

2. Go to GitHub > Settings > SSH and GPG keys > New SSH key

3. Open `~/Dropbox/Work/GitHub.pub` file in any editor and copy it's contents

4. Paste copied contents into github, name your key whatever you want

5. Add new ssh key in terminal i.e. `ssh-add ~/Dropbox/Work/GitHub`

6. Check that you can ssh into github `ssh -T git@github.com`

After this you should be able to install via yarn or npm
