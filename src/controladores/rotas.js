const numeros = require('../bancodedados');

const {num1, num2} = numeros

const somar = (req, res) => {
    let resposta = num1 + num2;
    res.json(resposta)
}

const subtrair = (req, res) => {
    const resposta = num1 - num2;
    res.json(resposta);
}

const multiplicar = (req, res) => {
    const resposta = num1 * num2;
    res.json(resposta);
}

const dividir = (req, res) => {
    const resposta = num1 / num2;
    res.json(resposta);
}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}