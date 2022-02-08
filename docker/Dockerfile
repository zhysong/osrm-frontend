FROM debian:buster-slim

RUN DEBIAN_FRONTEND=noninteractive apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
    curl \
    wget \
    git \
    sed \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Enables customized options using environment variables
ENV OSRM_BACKEND='http://localhost:5000'
ENV OSRM_CENTER='37.348645,-121.951331'
ENV OSRM_ZOOM='7'
ENV OSRM_LANGUAGE='en'
ENV OSRM_LABEL='Car (fastest)'

# Copy package.json
RUN mkdir -p /src
COPY package.json /src

ENV NVM_DIR "/root/.nvm"
ENV NODE_VERSION 15.12.0

# install nvm and nodejs
# https://github.com/nvm-sh/nvm#install--update-script
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash && \
  #export NVM_DIR="$HOME/.nvm" && \
  # This loads nvm
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  && \
  nvm install $NODE_VERSION && \
  nvm alias default $NODE_VERSION && \
  nvm use default && \
  # Appending below nvm source string to your ~/.bashrc to let nvm/node/npm available 
  #  export NVM_DIR="$HOME/.nvm" 
  #  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  #  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  node --version && \
  npm --version && \
  # Install app dependencies
  cd /src && \
  npm install

# Create app directory
COPY . /src
WORKDIR /src

ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Run App
EXPOSE 9966
CMD ["npm", "start"]
