const express = require('express')
const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]
let contagem = 0

app.get('/', (req, resp) => {
    resp.send(`É a vez de ${jogadores[contagem]} jogar!`)
    contagem++
    if (contagem === jogadores.length) {
        contagem = 0
    }
})

app.listen(3000, () => {
    console.log('Servidor iniciado, lendo a porta 3000')
})