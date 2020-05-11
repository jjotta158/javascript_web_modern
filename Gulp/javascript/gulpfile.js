const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const padrao = cb => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments:false,
            presets:["env"]
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    // or return cb()
}

exports.default = series(padrao)