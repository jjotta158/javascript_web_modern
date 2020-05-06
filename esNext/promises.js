function falarDepois(segundos, frase) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(frase)//recebe apenas um parâmetro
        }, segundos * 1000)
    })
}

falarDepois(3, 'Que legal')
.then(frase => frase.concat('?!?'))//tratamento de acerto
.catch(e => console.log('nothing'))//tratamento de erro