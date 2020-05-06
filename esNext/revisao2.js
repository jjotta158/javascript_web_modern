//Arrow function
const soma = (a,b) => a + b
console.log(soma);

//Arrow function (this)
const lexico1 = () => console.log(this === exports)

//parametro default
function log(texto = 'node') {
    console.log(texto)
}
log()
log('cois mais forte')

//operador rest
function total(...nimeros) {
    let total = 0
    numeros.forEach(element => {
        console.log(element)
    });
}