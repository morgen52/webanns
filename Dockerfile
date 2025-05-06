FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN mkdir /webanns_copy
RUN mkdir /webanns_exchange

COPY webanns-src/ /webanns_copy/

RUN apt-get update && \
    apt-get upgrade -y && \
    apt install -y python3.10 python3.10-distutils curl && \
    ln -s /usr/bin/python3.10 /usr/bin/python && \
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3.10

RUN apt-get install -y curl && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 18.18.0 && \
    nvm alias default 18.18.0 && \
    npm install -g npm@10.8.3 && \
    cd /webanns_copy/ && \
    npm install && \
    npm install -g typescript && \
    npm install --global prettier

RUN apt-get install -y xz-utils && \
    apt-get install -y git && \
    apt-get install -y libatomic1 && \
    mkdir /em && \
    cd /em && \
    git clone https://github.com/emscripten-core/emsdk.git && \
    cd emsdk && \
    git pull && \
    ./emsdk install 4.0.6 && \
    ./emsdk activate 4.0.6 && \
    bash -c "source ./emsdk_env.sh && echo 'source /em/emsdk/emsdk_env.sh' >> ~/.bashrc"


WORKDIR /webanns_exchange

CMD ["/bin/bash"]
