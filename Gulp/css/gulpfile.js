const { parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifyss')
const babel = require('gulp-babel')

const transformacaoCSS = ( ) => {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglifyComments":true}))
        .pipe(concat("estilo.min.css"))
        .pipe(gulp.dest("build/css"))
}

const copiarHTML = () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest("build/index.html"))
}

exports.default = parallel(
    transformacaoCSS,
    copiarHTML
)