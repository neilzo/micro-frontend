# micro-frontend

A proof-of-concept for frontend `~microservices~`

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
4. Load `http://localhost:3000` in a browser
5. Take over the world with its web-scale

To seed recipes, run:
```
docker exec -it recipe-server node packages/recipe/scripts/seedRecipes.js
```

## TODO:

- [ ] Env config for dev server ports
- [ ] Shared deps
  - [ ] Used by at least two apps: √react, √react-dom, redux, history, lodash
  - [ ] Share common dev dependencies w/ Lerna
- [x] Scaffold Redux
    - [x] Implement and share access across sub-apps
- [ ] Testing
  - [x] Scaffold tests
  - [ ] Increase coverage to 75%
  - [ ] Coverage tool?
- [ ] Add LESS/SCSS
- [x] Add trivial DB interactions to show its use
  - [ ] Add auth (account, login/out)
- [ ] Add Nginx
- [x] Experiment w/ Docker
  - [x] Dockerfiles
  - [x] Docker compose
  - [x] Instead of serving prod version, enable dev w/ webpack dev servers
  - [x] Docker prod config
  - [x] Consolidate docker files
  - [x] Fix classnames not being installed :confused:
  - [x] Use multi-stage builds to trim image size
- [ ] CI
  - [ ] Github actions/CircleCI
- [ ] Prod build + deploy
  - [x] Build and serve static files
  - [ ] Ship it to the world
