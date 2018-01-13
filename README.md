# Bootstrap Navbar Only

> Bootstrap 4 demo with critical path CSS and deferred JS for only navbar functionality.

| Demo                                                        | Time to first paint (ms) | Description                                                                                                          |
| ------------------------------------------------------------|:------------------------:|:--------------------------------------------------------------------------------------------------------------------:|
| [demo1](https://patkub.github.io/bs-navbar-only/demo1.html) | ~110 ms                  | Inlined critical path navbar CSS, and deferred the rest of bootstrap's CSS, jquery.slim.min.js and minimal navbar JS |
| [demo2](https://patkub.github.io/bs-navbar-only/demo2.html) | ~160 ms                  | Render-blocking bootstrap.min.css, and deferred jquery.slim.min.js and minimal navbar JS                             |
| [demo3](https://patkub.github.io/bs-navbar-only/demo3.html) | ~200 ms                  | Render-blocking bootstrap.min.css, and deferred jquery.slim.min.js and bootstrap.bundle.min.js                       |
| [demo4](https://patkub.github.io/bs-navbar-only/demo4.html) | ~115 ms                  | Inlined critical path navbar CSS, and deferred bootstrap.min.css, jquery.slim.min.js and minimal navbar JS           |
| [demo5](https://patkub.github.io/bs-navbar-only/demo5.html) | ~115 ms                  | Inlined critical path navbar CSS, and deferred bootstrap.min.css, jquery.slim.min.js and bootstrap.bundle.min.js     |

## How it works

Critical path CSS containing only navbar styles is inlined. The rest of bootstrap's styles are loaded asynchronously by [loadCSS](https://github.com/filamentgroup/loadCSS).
Only JavaScript necessary for Bootstrap Navbar functionality is included. Bootstrap's navbar JavaScript requires jQuery.
`jquery.slim.min.js` and the necessary Boostrap JavaScript are loaded with the defer script attribute to instruct the browser to execute the scripts when the page has finished parsing.

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

## Setup

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

### CSS

This command compiles SASS and runs the CSS through:
1) [PurifyCSS](https://github.com/purifycss/purifycss) to remove any unused CSS.
2) [gulp-strip-css-comments](https://github.com/sindresorhus/gulp-strip-css-comments) to remove comments.
3) [gulp-clean-css](https://github.com/scniro/gulp-clean-css) to optimize and minify CSS.

The resulting `critical.min.css` is output to the `css` directory.

```sh
yarn run css
```

### JS

This command concatenates the necessary navbar JavaScript and minfies it with [gulp-uglifyes](https://github.com/duan602728596/gulp-uglifyes).
The resulting `deferred.min.js` is output to the `js` directory.

```sh
yarn run js
```
