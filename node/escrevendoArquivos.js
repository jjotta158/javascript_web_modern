const fs = require('fs');

const produto = {
    nome:'Nokia 530',
    preco:400,
    desconto:0
}


fs.writeFile(__dirname + 'arquivo.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquico Salvo')
})