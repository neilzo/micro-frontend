FROM node:13.13.0-alpine as node
ARG YARN_VERSION=1.22.4
ARG APP_NAME

# Image for settings up our monorepo
FROM node as builder

MAINTAINER Neil Daftary neilyo16[at]gmail.com

# Install curl & bash since alpine doesn't have it
RUN apk add --no-cache curl bash

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version ${YARN_VERSION}

RUN mkdir -p /opt/app/
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./
COPY lerna.json ./

COPY packages/shared/package.json ./packages/shared/package.json
COPY packages/container/package.json ./packages/container/package.json
COPY packages/container/yarn.lock ./packages/container/yarn.lock

RUN yarn install

CMD ["yarn", "start", "--scope", "${APP_NAME}", "dev:client", "--stream"]

FROM node as server
ARG APP_NAME
WORKDIR /opt/app

COPY --chown=node:node --from=builder /opt/app .

CMD ["yarn", "start", "--scope", "${APP_NAME}", "dev:client", "--stream"]

# Only build the project with the required src code
#FROM node as final

#WORKDIR /opt/app

#COPY --from=builder opt/app/node_modules ./node_modules
#COPY --from=builder opt/app/package.json .
#COPY --from=builder opt/app/yarn.lock .
#COPY --from=builder opt/app/lerna.json .
#COPY --from=builder opt/app/packages/shared ./packages/shared
# COPY --from=builder opt/app/packages/container ./packages/container
