const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const calcPegadaCarbono = require('./calcPegadaCarbono')

//app.use(bodyParser.text())
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})

app.post('/pegadacarbono', (req, res) => {

    result = calcPegadaCarbono(
        req.body.energiaKwhMes,
        req.body.gasCozinhaKgMes,
        req.body.gasNaturalM3Mes,
        req.body.veicPGasolinaKmMes,
        req.body.veicMGasolinaKmMes,
        req.body.veicGGasolinaKmMes,
        req.body.motoGasolinaKmMes,
        req.body.veicPEtanolKmMes,
        req.body.veicMEtanolKmMes,
        req.body.veicGEtanolKmMes,
        req.body.motoEtanolKmMes,
        req.body.carroDieselKmMes,
        req.body.onibusDieselUrbanoKmMes,
        req.body.onibusDieselRodoviaKmMes,
        req.body.carroGnvKmMes,
        req.body.viagemNacionalKmMes,
        req.body.viagemInternacionalKmMes,
        req.body.aterroResiduosKgDia
    )
    res.send(result)
})