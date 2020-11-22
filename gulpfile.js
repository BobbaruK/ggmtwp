// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const tinypng = require('gulp-tinypng-compress');
const webp = require('gulp-webp');
const jsonMinify = require('gulp-json-minify');

// File paths
const files = {
  scssPathFront: 'src/scss/front/**/*.scss',
  scssPathBack: 'src/scss/back/**/*.scss',
  scssPathFrontTo: 'dist/css',
  jsPathFront: 'src/js/front/**/*.js',
  jsPathBack: 'src/js/back/**/*.js',
  jsPathFrontTo: 'dist/js',
  jsPathTables: 'src/js/tables/**/*.js',
  jsPathTablesTo: 'dist/js/tables',
  jsonsPath: 'src/js/tables/**/*.json',
  jsonsPathTo: 'dist/js/tables',
  imgPath: 'src/imgs/**/*.{png,PNG,jpg,JPG,jpeg,JPEG}',
  imgPathTo: 'dist/imgs/',
  svgsimgPath: 'src/imgs/**/*.svg',
  svgsimgPathTo: 'dist/imgs/',
  gifsimgPath: 'src/imgs/**/*.gif',
  gifsimgPathTo: 'dist/imgs/',
};

// Sass task: compiles the style.scss file into style.css
function scssTaskFront() {
  return src(files.scssPathBack)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest(files.scssPathFrontTo)); // put final CSS in dist folder
}
function scssTaskBack() {
  return src(files.scssPathFront)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest(files.scssPathFrontTo)); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTaskFront() {
  return src([
    files.jsPathFront,
    // ,'!' + 'src/js/forms.js', // to exclude any specific files
  ])
    .pipe(concat('csseco-scripts.js'))
    .pipe(terser())
    .pipe(dest(files.jsPathFrontTo));
}

function jsTaskBack() {
  return src([
    files.jsPathBack,
    // ,'!' + 'src/js/forms.js', // to exclude any specific files
  ])
    .pipe(concat('csseco-scripts.admin.js'))
    .pipe(terser())
    .pipe(dest(files.jsPathFrontTo));
}

function jsTaskBS() {
  return src([
    // 'node_modules/bootstrap/js/dist/*.js',
    'node_modules/bootstrap/js/dist/util.js', // All Bootstrap’s JavaScript files depend on util.js
    'node_modules/bootstrap/js/dist/index.js', // ?
    // 'node_modules/bootstrap/js/dist/alert.js',          // https://getbootstrap.com/docs/4.5/components/alerts/
    // 'node_modules/bootstrap/js/dist/button.js',         // https://getbootstrap.com/docs/4.5/components/buttons/#button-plugin
    // 'node_modules/bootstrap/js/dist/carousel.js',       // https://getbootstrap.com/docs/4.5/components/carousel/
    'node_modules/bootstrap/js/dist/collapse.js',       // https://getbootstrap.com/docs/4.5/components/collapse/
    // 'node_modules/bootstrap/js/dist/dropdown.js',       // https://getbootstrap.com/docs/4.5/components/dropdowns/
    'node_modules/bootstrap/js/dist/modal.js',          // https://getbootstrap.com/docs/4.5/components/modal/
    // tooltip.js must be before popover.js
    // 'node_modules/bootstrap/js/dist/tooltip.js',        // https://getbootstrap.com/docs/4.5/components/tooltips/
    // 'node_modules/bootstrap/js/dist/popover.js',        // https://getbootstrap.com/docs/4.5/components/popovers/
    // 'node_modules/bootstrap/js/dist/scrollspy.js',      // https://getbootstrap.com/docs/4.5/components/scrollspy/
    'node_modules/bootstrap/js/dist/tab.js',            // https://getbootstrap.com/docs/4.5/components/navs/#javascript-behavior
    // 'node_modules/bootstrap/js/dist/toast.js',          // https://www.w3schools.com/bootstrap4/bootstrap_ref_js_toasts.asp
  ])
    .pipe(concat('bootstrap.js'))
    .pipe(terser())
    .pipe(dest('vendor/bootstrap/js/'));
}

function jquery(){
  return src('node_modules/jquery/dist/jquery.min.js')
      // .pipe(terser()) 
      .pipe(dest('vendor/jquery/'));
}

function popperjs(){
  return src('node_modules/popper.js/dist/umd/popper.min.js')
      // .pipe(terser()) 
      .pipe(dest('vendor/popper/'));
}

function gsap(){
  return src('node_modules/gsap/dist/gsap.min.js')
      // .pipe(terser()) 
      .pipe(dest('vendor/gsap/'));
}

function gsap_scrollTrigger(){
  return src('node_modules/gsap/dist/ScrollTrigger.min.js')
      // .pipe(terser()) 
      .pipe(dest('vendor/gsap/'));
}

function jsTables() {
  return (
    src([
      files.jsPathTables,
      // ,'!' + 'src/js/forms.js', // to exclude any specific files
    ])
      // .pipe(concat('csseco-scripts.js'))
      .pipe(terser())
      .pipe(dest(files.jsPathTablesTo))
  );
}
function jsonUgly() {
  return (
    src([
      files.jsonsPath,
      // ,'!' + 'src/js/forms.js', // to exclude any specific files
    ])
      // .pipe(concat('csseco-scripts.js'))
      .pipe(jsonMinify())
      .pipe(dest(files.jsonsPathTo))
  );
}

// Copy svg and gifs imgs bc tinypng cannot optimize them
function copysvgs() {
  return src(files.svgsimgPath).pipe(dest(files.svgsimgPathTo));
}
function copygifs() {
  return src(files.gifsimgPath).pipe(dest(files.gifsimgPathTo));
}

// Minify Img
function minImg() {
  return src(files.imgPath)
    .pipe(
      tinypng({
        key: 'DwMzjHv0DYyR5mrMBtm3cBFqQLpFp032', // bogdan.s@fxoro.com
        // key: 'ZXMw587q2Tnzc7j1BcHVLmqhS9gksVy6', // k.bobbaru@gmail.com
        sigFile: 'src/imgs/.tinypng-sigs',
        log: true,
      })
    )
    .pipe(dest(files.imgPathTo));
}

// Webp Images
function webpimgs() {
  return src(files.imgPath).pipe(webp()).pipe(dest(files.imgPathTo));
}

// Edit index.html - imgs src
// function editHTML() {
//     return src(['index.html'])
//         .pipe(replace('src/', 'dist/'))
//         .pipe(replace('<img src="', '<img data-src="')) // 4 lazyload
//         .pipe(dest('.'))
// }

// Edit csseco-style.css - imgs src
function editCSS() {
  return src(['dist/css/*.css'])
    .pipe(replace('../../src/imgs/', '../imgs/'))
    .pipe(dest('dist/css/.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch(
    [
      files.scssPathFront,
      files.scssPathBack,
      files.jsPathFront,
      files.jsPathBack,
      files.jsPathTables,
      files.jsonsPath,
    ],
    // minImg,
    // webpimgs,
    series(
      parallel(
        scssTaskFront,
        scssTaskBack,
        jsTaskFront,
        jsTaskBack,
        jsTaskBS,
        jsTables,
        jsonUgly
      )
    )
  );
}

// When the site is ready to deploy
exports.end = series(
  scssTaskFront,
  scssTaskBack,
  jsTaskFront,
  jsTaskBack,
  jsTaskBS,
  jquery,
  popperjs,
  gsap,
  gsap_scrollTrigger,
  jsTables,
  jsonUgly,
  copysvgs,
  copygifs,
  // minImg,
  // webpimgs,
  // editHTML,
  // editCSS
);

// Export the default Gulp task so it can be run
exports.default = series(
  parallel(
    scssTaskFront,
    scssTaskBack,
    jsTaskFront,
    jsTaskBack,
    jsTaskBS,
    jsTables
  ),
  watchTask
);
