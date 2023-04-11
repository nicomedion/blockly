## Blockly

Google's Blockly is a web-based, visual programming editor. Users can drag
blocks together to build programs. All code is free and open source.

**The project page is https://developers.google.com/blockly/**

You use this git repo to build the `msg` directory and the `blockly-compressed.js` for the Open-Roberta lab.

### Build the Resources for the Open-Roberta Lab

On linux systems one possibility is

-   you have the closure-library next to this project (you need version [20200719.0.0](https://github.com/google/closure-library/archive/refs/tags/v20200719.zip))
-   you have installed the closure compiler via npm:
    -   e.g. `npm install --save google-closure-compiler@20200719`
    -   check the version: `npx google-closure-compiler --version` => `v20200719`
-   you have installed python 2.7 (:-<)
-   run the `build.py` script

A solution on windows systems or an alternative for linux is

-   you have installed docker
-   `docker run --mount type=bind,source=:your-blockly-git:,destination=/opt/blockly/blockly openroberta/blocklybuilder:22.04`
-   in this case no python 2 installation, no closure compiler installation, no closure compiler resources

### Workflow

-   you have cloned the blockly git https://github.com/OpenRoberta/blockly.git into `:your-blockly-git:`
-   you have a feature branch `git checkout -b feature/myChanges`
-   you edit a file in the `blocks` folder to add or change a blockly block and edit the file
    `robMsg/robMessages.js` to add or change a message and then re-build the resources. Use one of the possibilities
    described above. _Never_ change a file in the `msg` folder, because these changes would be overwritten by the next build.
-   check your changes in the blockly playground found in the directory `tests`. One of the many playgrounds will fit your need.
    You may copy one and modify it. If you are satisfies with your results, continue.
-   try your results in the Open-Roberta lab: copy the `msg` directory and the `blockly-compressed.js` into
    `:your-openroberta-lab-git:/OpenrobertaServer/staticResources/blockly`. If you are satisfies with your results, continue.
-   rebase on master: `git fetch;git rebase master`
-   merge to master: `git checkout master;git merge feature/myChanges;git push`
-   later delete your feature branch `git branch -d feature/myChanges`
-   your changes to blockly are now persisted in the `blockly` repo **and** in your `:your-openroberta-lab-git:`. In the feature
    you'll commit these changes in the feature branch and eventually you'll merge your changes to `develop`.

Note, that the `blockly` repo only provides a `master` branch. There is no high traffix with this repo and thus it ok to
simplify the repo structure.
