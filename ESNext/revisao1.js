//let e const
{
    var a = 2
    let b = 3                   /// let funciona dentro da chave, var funciona dentro e fora
    console.log(b)
}

console.log(a)

// Template string
const produto = 'Produto'
console.log(`${produto}, é caro!`)

//Desctructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const{ idade: i, nome } = { nome: 'Ana', idade:8 }
console.log(i, nome)