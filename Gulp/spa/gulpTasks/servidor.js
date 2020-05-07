const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb) {
    watch('sfc/**/*.html', () => gulp.series('appHTML')())
    watch('sfc/**/*.scss', () => gulp.series('appCSS')())
    watch('sfc/**/*.js', () => gulp.series('appJS')())
    watch('sfc/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open:true,
            livereload: true            
        }))

}

module.exports = {
    monitorarArquivos,
    servidor
}