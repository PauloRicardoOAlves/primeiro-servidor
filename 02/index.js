const express = require('express')
const app = express()

let minutos = 0
let segundos = 0
let cronometro

function iniciar() {
    cronometro = setInterval(() => {
        segundos++
        if (segundos > 59) {
            segundos = 0
            minutos++
        }
    }, 1000);
}

function pausar() {
    clearInterval(cronometro)
}

app.get('/', (req, resp) => {
    resp.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)

})

app.get('/iniciar', (req, resp) => {
    resp.send('Cronômetro iniciado!')
    iniciar()
})

app.get('/pausar', (req, resp) => {
    resp.send('Cronômetro pausado!')
    pausar()
})

app.get('/continuar', (req, resp) => {
    resp.send('Cronômetro continuando!')
    iniciar()
})

app.get('/zerar', (req, resp) => {
    resp.send('Cronômetro zerado!')
    minutos = 0
    segundos = 0
})

app.listen(8000, () => {
    console.log('Servidor iniciado. Lendo a porta 8000')
})
