const express = require('express');
const {somar, subtrair, multiplicar, dividir} = require('./controladores/rotas')

const app = express();


app.get('/somar', somar);
app.get('/subtrair', subtrair);
app.get('/multplicar', multiplicar);
app.get('/dividir', dividir);

app.listen(3000)