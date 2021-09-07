function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    } 
}

console.log(criarProduto('Notebook', 2199.59))
console.log(criarProduto('Chuteira Magista', 789.99))
console.log(criarProduto('Celular Iphone XR', 4990.00))