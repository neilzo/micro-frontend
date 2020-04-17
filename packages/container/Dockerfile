FROM node:13.13.0-alpine

MAINTAINER Neil Daftary neilyo16[at]gmail.com

# Install curl since alpine doesn't have it?
RUN apk add --no-cache curl bash
# Hmmm
RUN touch ~/.bash_profile

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.4
# Install Lerna
RUN yarn global add lerna@3.20.2

# Create app dir
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Create Yarn cache
# ADD .yarn_cache /usr/local/share/.cache/yarn/v1/

# Add src code
ADD . /opt/app/

# Install deps
RUN yarn install && yarn run build

EXPOSE 5000

ENTRYPOINT ["yarn", "start:server"]
