// operador ... rest(juntar)/spread(espalhar)
// ysar rest com paramtro de função

//usar spread com objeto
const funcionario = { nome: 'Matheus', salario: 12348.99 }
const clone = { ativos: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)