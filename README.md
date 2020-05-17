# knit.dev

[![Github CI Status](https://github.com/knit-dev/knit.dev/workflows/Node.js%20CI/badge.svg)](https://github.com/knit-dev/knit.dev/actions?query=workflow%3A%22Node.js+CI%22)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea8a477c-0660-452d-ba18-1a2afac56e74/deploy-status)](https://app.netlify.com/sites/competent-almeida-f8edd4/deploys)

> Website for Knit LLC

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## vue-devtools

Command to run standalone electron version of vue-devtools in parallel with app. Debug app opened in mobile browser, safari, native script etc! Browser extension versions do not require these commands

```bash
# using dependency package (recommended)
$ npm run dev-devtools

# using global package (requires global install of vue-devtools)
$ vue-devtools & env VUE_DEVTOOLS=true npm run dev
```

## Docker

```bash
# develop
$ docker-compose -f "docker-compose.development.yml" up -d --build

# generate static files for deployment
$ docker-compose -f "docker-compose.prod.yml" up -d --build
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
