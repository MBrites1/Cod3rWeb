function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // reject(frase) - QUANDO QUISER REJEITAR A FRASE.
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e)) // PRA TRATAR O ERRO QUANDO USADO O REJECT