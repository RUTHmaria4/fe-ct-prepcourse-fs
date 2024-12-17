function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  const suma = resultadosTest.reduce((acumulador, resultado)=> acumulador + resultado, 0);
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;



//EJEMPLO
console.log(promedioResultadosTest([1, 3.4, 2, 6.5, 7, 10]));
console.log(promedioResultadosTest([0.2, 3.5, 4, 8, 12]));
console.log(promedioResultadosTest([7, 5, 4, 3, 2, 12]));
