// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps            = require('gulp-sourcemaps');
const sass                  = require('gulp-sass');
const concat                = require('gulp-concat');
const terser                = require('gulp-terser');
const postcss               = require('gulp-postcss');
const autoprefixer          = require('autoprefixer');
const cssnano               = require('cssnano');
var   replace               = require('gulp-replace');
const tinypng               = require('gulp-tinypng');
const webp                  = require('gulp-webp');
var   htmlmin               = require('gulp-htmlmin');
var   rename                = require("gulp-rename");
var   clean                 = require('gulp-clean');
var   util                  = require('gulp-util');
var   jsonMinify            = require('gulp-json-minify');

// File paths
const files = { 
    scssPathFront           : 'src/scss/front/**/*.scss',
    scssPathBack            : 'src/scss/back/**/*.scss',
    scssPathFrontTo         : 'dist/css',
    jsPathFront             : 'src/js/front/**/*.js',
    jsPathBack              : 'src/js/back/**/*.js',
    jsPathFrontTo           : 'dist/js',
    jsPathTables            : 'src/js/tables/**/*.js',
    jsPathTablesTo          : 'dist/js/tables',
    jsonsPath               : 'src/js/tables/**/*.json',
    jsonsPathTo             : 'dist/js/tables',
    imgPath                 : 'src/imgs/**/*',
    imgPathTo               : 'dist/imgs/',
    svgsimgPath             : 'src/imgs/**/*.svg',
    svgsimgPathTo           : 'dist/imgs/',
    svgsimgPath_b           : 'dist/imgs/**/*.svg',
    svgsimgPathTo_b         : 'src/imgs/',
    gifsimgPath             : 'src/imgs/**/*.gif',
    gifsimgPathTo           : 'dist/imgs/',
    gifsimgPath_b           : 'dist/imgs/**/*.gif',
    gifsimgPathTo_b         : 'src/imgs/',
}

// Sass task: compiles the style.scss file into style.css
function scssTaskFront(){    
    return src(files.scssPathBack)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(files.scssPathFrontTo)); // put final CSS in dist folder
}
function scssTaskBack(){    
    return src(files.scssPathFront)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(files.scssPathFrontTo)); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTaskFront(){
    return src([
            files.jsPathFront
            // ,'!' + 'src/js/forms.js', // to exclude any specific files
        ])
        .pipe(concat('csseco-scripts.js'))
        .pipe(terser())
        .pipe(dest(files.jsPathFrontTo));
}

function jsTaskBack(){
    return src([
            files.jsPathBack
            // ,'!' + 'src/js/forms.js', // to exclude any specific files
        ])
        .pipe(concat('csseco-scripts.admin.js'))
        .pipe(terser())
        .pipe(dest(files.jsPathFrontTo));
}

function jsTaskBS(){
    return src([
            // 'node_modules/bootstrap/js/dist/*.js',
            'node_modules/bootstrap/js/dist/util.js',           // All Bootstrap’s JavaScript files depend on util.js
            'node_modules/bootstrap/js/dist/index.js',          // ?
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

function jsTables(){
    return src([
            files.jsPathTables
            // ,'!' + 'src/js/forms.js', // to exclude any specific files
        ])
        // .pipe(concat('csseco-scripts.js'))
        .pipe(terser())
        .pipe(dest(files.jsPathTablesTo));
}
function jsonUgly(){
    return src([
            files.jsonsPath
            // ,'!' + 'src/js/forms.js', // to exclude any specific files
        ])
        // .pipe(concat('csseco-scripts.js'))
        .pipe(jsonMinify())
        .pipe(dest(files.jsonsPathTo));
}

// Copy svg and gifs imgs bc tinypng cannot optimize them
function copysvgs() {
    return src(files.svgsimgPath)
        .pipe(dest(files.svgsimgPathTo))
}
function copygifs() {
    return src(files.gifsimgPath)
        .pipe(dest(files.gifsimgPathTo))
}

// Delete svgs and gifs
function deletesvgs() {
    return src(files.svgsimgPath, { read: false })
        .pipe(clean())
}
function deletegifs() {
    return src(files.gifsimgPath, { read: false })
        .pipe(clean())
}

// Minify Img
function minImg() {
    return src(files.imgPath)
        .pipe(tinypng('DwMzjHv0DYyR5mrMBtm3cBFqQLpFp032')) // bogdan.s@fxoro.com
        // .pipe(tinypng('ZXMw587q2Tnzc7j1BcHVLmqhS9gksVy6')) // k.bobbaru@gmail.com
        .pipe(dest(files.imgPathTo))
}

// Copy back svg and gif imgs for development
function copysvgs_b() {
    return src(files.svgsimgPath_b)
        .pipe(dest(files.svgsimgPathTo_b))
}
function copygifs_b() {
    return src(files.gifsimgPath_b)
        .pipe(dest(files.gifsimgPathTo_b))
}

// Webp Images
function webpimgs() {
    return src(files.imgPath)
        .pipe(webp())
        .pipe(dest(files.imgPathTo))
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
        .pipe(dest('dist/css/.'))
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPathFront, files.scssPathBack, files.jsPathFront, files.jsPathBack, files.jsPathTables, files.jsonsPath], 
        // minImg,
        // webpimgs,
        series(
            parallel(scssTaskFront, scssTaskBack, jsTaskFront, jsTaskBack, jsTaskBS, jsTables, jsonUgly)
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
    jsTables,
    jsonUgly,
    copysvgs,
    copygifs,
    deletesvgs,
    deletegifs,
    minImg,
    // webpimgs,
    copysvgs_b,
    copygifs_b,
    // editHTML,
    // editCSS
);

// Export the default Gulp task so it can be run
exports.default = series(
    parallel(scssTaskFront, scssTaskBack, jsTaskFront, jsTaskBack, jsTaskBS, jsTables),
    watchTask
);