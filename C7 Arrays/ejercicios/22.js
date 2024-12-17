function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const tablaDelMultiplicar = [];
  for (let i = 0; i <= 10; i++) {
    tablaDelMultiplicar.push(6 * i);

  }
  return tablaDelMultiplicar;
}

module.exports = tablaDelSeis;
 


//EJEMPLO
console.log(tablaDelSeis());
console.log(tablaDelSeis(1, 2, 3, 4, 5, 6));
