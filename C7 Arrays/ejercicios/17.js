function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
}

module.exports = agregarNumeros;



//SUMA
 console.log(agregarNumeros([3, 5, 6]));
 console.log(agregarNumeros([9, 4, 5, 3]));
 console.log(agregarNumeros([0,-1, -2, -3]));
