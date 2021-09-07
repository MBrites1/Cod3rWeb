// não aceita repetição/não indexada
const times = new Set()
times.add('Linense')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Linense')

console.log(times)
console.log(times.size)
console.log(times.has('linense'))
console.log(times.has('Linense'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)