# Bootstrap Navbar Only Demos

| Demo                                                        | Time to first paint (ms) | Description                                                                                                          |
| ------------------------------------------------------------|:------------------------:|:--------------------------------------------------------------------------------------------------------------------:|
| [demo1](https://patkub.github.io/bs-navbar-only/demo1.html) | ~110 ms                  | Inlined critical path navbar CSS, and deferred the rest of bootstrap's CSS, jquery.slim.min.js and minimal navbar JS |
| [demo2](https://patkub.github.io/bs-navbar-only/demo2.html) | ~115 ms                  | Inlined critical path navbar CSS, and deferred bootstrap.min.css, jquery.slim.min.js and minimal navbar JS           |
| [demo3](https://patkub.github.io/bs-navbar-only/demo3.html) | ~115 ms                  | Inlined critical path navbar CSS, and deferred bootstrap.min.css, jquery.slim.min.js and bootstrap.bundle.min.js     |
| [demo4](https://patkub.github.io/bs-navbar-only/demo4.html) | ~160 ms                  | Render-blocking bootstrap.min.css, and deferred jquery.slim.min.js and minimal navbar JS                             |
| [demo5](https://patkub.github.io/bs-navbar-only/demo5.html) | ~200 ms                  | Render-blocking bootstrap.min.css, and deferred jquery.slim.min.js and bootstrap.bundle.min.js                       |
