//tagged template - processar template string dentro de uma função
function tag(parte, ...valores) {
    console.log(partes);
    console.log(valores)
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)

