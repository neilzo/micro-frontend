# micro-frontend

A proof-of-concept for frontend `~microservices~`

## TODO:

- [] Env config for dev server ports
- [x] Make a monorepo using Lerna
  - [] Share common dev dependencies
- [x] Scaffold Redux
    - [x] Implement and share access across sub-apps
- [] Testing
  - [x] Scaffold tests
  - [] Increase coverage to 75%
  - [] Coverage tool?
- [] Share core deps
  - [] Used by at least two apps: react, react-dom, redux, history, lodash
- [] Add LESS/SCSS
- [] Add account, login/out
- [] Add Nginx
- [] Experiment w/ Docker
  - [x] Dockerfiles
  - [x] Docker compose
  - [x] Instead of serving prod version, enable dev w/ webpack dev servers
  - [] Docker prod config
- [] Prod build + deploy
  - [x] Build and serve static files
  - [] Ship it to the world
