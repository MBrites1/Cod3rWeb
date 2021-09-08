function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

//console.log(total (8, 7, 6, 5,))

var a = ['Matheus', 'Henrique', 'Cida']
var b = ['Lucia', 'Layla', ...a]
b.forEach(function (n) {
    console.log(n)
})

console.log(b[3])

var m = new Map()
m.set(1, 'Matheus')
m.set(30, 'Lucia')
m.set(2, 'Cida')
m.set('Layla', {nome: 'Layla', idade: 30, sexo: 'F'}) //Usando Json
m.set(3, 'Henrique')

console.log(m.get('Layla'))