const executarCalculo = require("../controllers/calculadoraController");

test("soma correta", () => {
  expect(executarCalculo(2, 3, "+")).toBe(5);
});

test("subtração correta", () => {
  expect(executarCalculo(5, 3, "-")).toBe(2);
});

test("divisão por zero", () => {
  expect(executarCalculo(10, 0, "/")).toBe("Divisão por zero");
});

test("entrada inválida", () => {
  expect(executarCalculo("a", 2, "+")).toBe("Valores precisam ser números");
});

test("operação inválida", () => {
  expect(executarCalculo(2, 2, "%")).toBe("Operação inválida");
});