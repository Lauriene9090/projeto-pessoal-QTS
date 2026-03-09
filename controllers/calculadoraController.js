const calcular = require("../service/calculadoraService");

function executarCalculo(a, b, operacao) {
  try {
    const resultado = calcular(a, b, operacao);
    return resultado;
  } catch (erro) {
    return erro.message;
  }
}

module.exports = executarCalculo;