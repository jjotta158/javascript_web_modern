// operador ...reat(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome:"maria", salario:123123}
const clone = {ativo: true, ...functionario} //adicionar ao objeto clone os campos do objeto funcionarios

const grupoA = ['João ', 'Maria', 'José']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']