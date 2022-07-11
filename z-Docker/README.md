### Overview

This text describes how to generate the docker image needed to create the blockly resources for the openroberta-lab.
This work is done by the maintainers of the lab.

**You can generate an inage of your own, of course, but usually it is easier to retrieve the image from dockerhub.**

See the README of the `blockly` git repo how to use the generated image

### Generating the docker image

- `cd :your-git-clone-of the-blockly-git:/z-Docker`
- `docker build -t openroberta/blocklybuilder:20.04.1 .`

Have a look at the `Dockerfile` to see what happens during the build. Notes about internals of the generated image:

- the entry point is `./build.sh`. It simply runs `build.py` using python 2.7
- the base directory for resources in the container is `/opt/blockly/`
- the volume `/opt/blockly/blockly/` in the container is used at run-time to mount the blockly git from outside the container, which is both source of the generation **and** target
  of the generation
- in the container beneath the /opt/blockly/blockly/ directory, at path `/opt/blockly/closure-library/`, there are the resources needed by the closure compiler.
- you have to change nothing, the only "dynamic" part is the blockly git from "outside", which is mounted at runtime.

### Short Remark: How To Run the docker image (by creating a container)

   - make your changes in blockly, then
   - `docker run --mount type=bind,source=:your-git-clone-of the-blockly-git:,destination=/opt/blockly/blockly openroberta/blocklybuilder:20.04.1`
   - from :your-git-clone-of the-blockly-git: get the file `blockly_compressed.js` and the directory `msg` and put them into the
     directory `:your-git-clone-of the-openroberta-git:OpenrobertaServer/staticResources/blockly`
