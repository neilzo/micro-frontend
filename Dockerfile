FROM node:13.13.0-alpine as node

# Image for settings up our monorepo
FROM node as builder
ARG YARN_VERSION=1.22.4
ARG APP_NAME

MAINTAINER Neil Daftary neilyo16[at]gmail.com

# Install curl & bash since alpine doesn't have it
RUN apk add --no-cache curl bash

# Hmmm
RUN touch ~/.bash_profile

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version ${YARN_VERSION}

RUN mkdir -p /opt/app/
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./
COPY lerna.json ./

COPY packages/shared/package.json ./packages/shared/package.json
COPY packages/${APP_NAME}/package.json ./packages/${APP_NAME}/package.json
COPY packages/${APP_NAME}/yarn.lock ./packages/${APP_NAME}/yarn.lock

RUN yarn install

# Only build the project with the required src code
FROM node as final
ARG APP_NAME

WORKDIR /opt/app

COPY --from=builder opt/app/node_modules ./node_modules
COPY --from=builder opt/app/package.json .
COPY --from=builder opt/app/yarn.lock .
COPY --from=builder opt/app/lerna.json .
COPY --from=builder opt/app/packages/shared ./packages/shared
COPY --from=builder opt/app/packages/${APP_NAME} ./packages/${APP_NAME}
