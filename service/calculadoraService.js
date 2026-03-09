function calcular(a, b, operacao) {

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Valores precisam ser números");
  }

  switch (operacao) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        throw new Error("Divisão por zero");
      }
      return a / b;

    default:
      throw new Error("Operação inválida");
  }
}

module.exports = calcular;