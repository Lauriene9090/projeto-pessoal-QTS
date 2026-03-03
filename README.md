# projeto-pessoal-QTS

Projeto: Calculadora com Testes de Erro
🎯 Objetivo

Criar funções matemáticas e testar:

Operações corretas

Tratamento de erro

Casos inválidos

📁 Arquivo da Calculadora
calculator.js
function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Entrada inválida");
  }
  return a + b;
}

function divisao(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Entrada inválida");
  }

  if (b === 0) {
    throw new Error("Divisão por zero não permitida");
  }

  return a / b;
}

module.exports = { soma, divisao };
🧪 Testes com Jest
calculator.test.js
const { soma, divisao } = require("./calculator");

describe("Calculadora - Testes de Qualidade", () => {

  test("deve somar corretamente", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("deve lançar erro se entrada for inválida", () => {
    expect(() => soma("2", 3)).toThrow("Entrada inválida");
  });

  test("deve dividir corretamente", () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test("não deve permitir divisão por zero", () => {
    expect(() => divisao(10, 0))
      .toThrow("Divisão por zero não permitida");
  });

});
