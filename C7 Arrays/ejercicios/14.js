function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(numero => numero > 10).length;

}

module.exports = contarElementosMayoresA10;



//EJEMPLO
console.log(contarElementosMayoresA10([1, 5, 7, 8, 9, 10, 11]));
console.log (contarElementosMayoresA10([20, 21, 22, 23]));
console.log(contarElementosMayoresA10([3, 35, 60, 70]));
