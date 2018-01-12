# Boostrap Navbar Only

> Bootstrap 4 demo with critical path CSS and deferred JS for only navbar functionality.

### Setup

First, install [Node.js](https://nodejs.org/en/download) and [Yarn](https://yarnpkg.com/lang/en/docs/install)

### Fetch dependencies

```sh
yarn install
```

### Build

This command minifies HTML, CSS, and JS and copies dependencies to the `build` directory.

```sh
yarn run build
```

### How it works

The necessary bootstrap Sass for navbar styles:

```
@import "node_modules/bootstrap/scss/reboot";
@import "node_modules/bootstrap/scss/type";
@import "node_modules/bootstrap/scss/transitions";
@import "node_modules/bootstrap/scss/nav";
@import "node_modules/bootstrap/scss/navbar";
@import "node_modules/bootstrap/scss/utilities";
```

The necessary bootstrap JavaScript for navbar functionality:

```
node_modules/bootstrap/js/dist/util.js
node_modules/bootstrap/js/dist/collapse.js
```
