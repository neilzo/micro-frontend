# micro-frontend

A proof-of-concept for frontend `~microservices~`

![CI](https://github.com/neilzo/micro-frontend/workflows/CI/badge.svg)

## Overview

This app is inspired by [Cam Jackson's micro-frontend article](https://martinfowler.com/articles/micro-frontends.html)
with some changes and additions like:

- Micro-frontends are backed by individual node apps
- Global redux store implemented
- Leverages Docker
- Uses Lerna & Yarn workspaces to manage the monorepo
- No content server

Architecture:
```
Container app
| - Search (browse recipes) sub-app
| | - Uses global redux store
| - Recipe sub-app
| | - Connected to Mongo
```

## Getting started

Requires:
- [Docker](https://www.docker.com/products/docker-desktop)

1. `git clone` this repo
2. Within the app dir, run `docker-compose build`
3. Then `docker-compose up`
4. To create the default MongoDB user, first sh in with `docker exec -it database mongo`
5. Copy, paste, and run the code from `scripts/initMongo.js`
6. To seed recipes, run:
   ```
   docker exec -it recipe-server node packages/recipe/scripts/seedRecipes.js
   ```
7. Load `http://localhost:3000` in a browser
8. Take over the world with its web-scale

## TODO:

- [ ] Env config for dev server ports
- [ ] Shared deps
  - [ ] Used by at least two apps: √react, √react-dom, redux, history, lodash
  - [ ] Share common dev dependencies w/ Lerna
- [x] Scaffold Redux
    - [x] Implement and share access across sub-apps
- [ ] Testing
  - [x] Scaffold tests
  - [ ] Increase coverage to 70%
  - [ ] Coverage tool
- [ ] Add LESS/SCSS
- [x] Add trivial DB interactions to show its use
  - [ ] Add auth (account, login/out)
- [x] Add Nginx
  - [ ] Configure to serve static assets from each sub-app
- [x] Experiment w/ Docker
  - [x] Dockerfiles
  - [x] Docker compose
  - [x] Instead of serving prod version, enable dev w/ webpack dev servers
  - [x] Docker prod config
  - [x] Consolidate docker files
  - [x] Fix classnames not being installed :confused:
  - [x] Use multi-stage builds to trim image size
- [ ] CI
  - [x] Github actions/CircleCI for test/lint
  - [ ] Use for publish/build
- [ ] Prod build + deploy
  - [x] Build and serve static files
  - [x] Ship it to the world
