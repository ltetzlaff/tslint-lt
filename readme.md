# tslint-lt

[![Build Status](https://travis-ci.org/ltetzlaff/tslint-lt.svg?branch=master)](https://travis-ci.org/ltetzlaff/tslint-lt)

## Setup (in ./)

### Install NodeJS

[Download](https://nodejs.org/en/download/current/)

### Fetch dependencies

```bash
npm install
```

## Dev (in ./)

Typescript builds are automatic and watch for file changes:

```bash
npm run build
```

or run this to build only once:

```bash
npm run buildOnce
```

## Contribution

- use `git pull --rebase` in favor of regular pull, i recommend configuring it globally via:
  ```bash
  git config --global pull.rebase true
  ```
