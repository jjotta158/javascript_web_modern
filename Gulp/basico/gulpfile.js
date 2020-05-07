const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
    console.log('Tarefa antes1');
    return cb();
}

const antes2 = cb => {
    console.log('Tarefa antes2');
    return cb();
}

function copiar(cb) {
    gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))//enviando arquivo para a pasta de arquivo
    return cb();
}

const fim = cb => {
    console.log('Tarefa fim!');
    return cb();
}

// module.exports.default = series(
//     antes1, antes2, *Executando ações em forma de serie 
//     copiar,
//     fim
// )

module.exports.default = series(
    parallel(antes1, antes2), //Execução de função de forma paralela
    copiar,
    fim
)