FROM ubuntu:20.04

RUN apt-get update && apt-get -y upgrade

RUN apt-get install -y locales
	
RUN locale-gen de_DE.UTF-8
ENV LANG de_DE.UTF-8 
ENV LANGUAGE de_DE:de 
ENV LC_ALL de_DE.UTF-8

RUN ln -fs /usr/share/zoneinfo/Europe/Berlin /etc/localtime; \
    export DEBIAN_FRONTEND=noninteractive; \
    apt-get install -y tzdata; \
    dpkg-reconfigure --frontend noninteractive tzdata	

WORKDIR /opt/blockly/
ADD ./closure-library.tgz ./build.sh ./

RUN apt-get -y install npm

RUN npm install -g google-closure-compiler@20200719.0.0 && \
    npm install -g npx

VOLUME ["/opt/blockly/blockly/"]
RUN mkdir -p /opt/blockly/blockly/ && \
    chmod +x ./build.sh

ENTRYPOINT ["sh","./build.sh"]

