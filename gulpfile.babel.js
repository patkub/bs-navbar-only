'use strict';

// include gulp & tools
import gulp from 'gulp';
import log from 'fancy-log';
import rename from 'gulp-rename';
import inlineSource from 'gulp-inline-source';
import mergeStream from 'merge-stream';

// stylesheet tools
import sass from 'gulp-sass';
import purifyCSS from 'gulp-purifycss';
import cleanCSS from 'gulp-clean-css';
import stripCSSComments from 'gulp-strip-css-comments';

// minification tools
const htmlmin = require('gulp-htmlmin');
const uglifyes = require('gulp-uglifyes');
import concat from 'gulp-concat';

// Compile & Minify Stylesheets
gulp.task('css', function() {
  log('Compiling & minifying CSS...');
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(purifyCSS([
      // Bootstrap JavaScript for Navbar
      'node_modules/bootstrap/js/dist/util.js',
      'node_modules/bootstrap/js/dist/collapse.js',
      
      // Files where Navbar CSS classes are used
      'demo1.html',
    ]))
    .pipe(stripCSSComments({
      preserve: false,
    }))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'));
});

// Concatenate & Minify JavaScript
gulp.task('js', function() {
  log('Concatenating & minifying JS...');
  return gulp.src([
    // Bootstrap JavaScript for Navbar
    'node_modules/bootstrap/js/dist/util.js',
    'node_modules/bootstrap/js/dist/collapse.js',
  ]).pipe(concat('deferred.min.js'))
    .pipe(uglifyes({
      warnings: true,
      ecma: 8,
    }))
    .pipe(gulp.dest('js/'));
});

// Build
gulp.task('build', ['css', 'js'], function() {
  log('Minifying HTML...');
  let htmlStream = gulp.src([
    'demo1.html',
    'demo2.html',
    'demo3.html',
  ])
  // minify html
  .pipe(htmlmin({
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: true,
    removeComments: true,
    minifyJS: true,
  }))
  // inline critical path CSS
  .pipe(inlineSource())
  .pipe(gulp.dest('build/'));
  
  // copy minifed css
  log('Copying CSS...');
  let cssStream = gulp.src([
    'css/**/*.css',
    '!css/critical.min.css',
  ])
  .pipe(gulp.dest('build/css/'));
  
  // copy minifed js
  log('Copying JS...');
  let jsStream = gulp.src([
    'js/**/*.js',
  ])
  .pipe(gulp.dest('build/js/'));
  
  // copy dependencies
  log('Copying dependencies...');
  let jQueryStream = gulp.src([
    'node_modules/jquery/dist/jquery.slim.min.js',
  ])
  .pipe(gulp.dest('build/node_modules/jquery/dist/'));
  
  let bootstrapCSSStream = gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
  ])
  .pipe(gulp.dest('build/node_modules/bootstrap/dist/css/'));
  
  let bootstrapJStream = gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  ])
  .pipe(gulp.dest('build/node_modules/bootstrap/dist/js/'));
  
  return mergeStream(htmlStream, cssStream, jsStream, jQueryStream, bootstrapCSSStream, bootstrapJStream);
});

// Default
gulp.task('default', ['build']);
