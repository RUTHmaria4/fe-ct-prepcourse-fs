function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  if(array.length === 0) {
    return true;
  }
  const primerElemento = array [0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false;
    }
  }
  return true;
} 

module.exports = todosIguales;


//EJEMPLO
console.log(todosIguales([1, 2, 3, 4, 5, 6]));
console.log(todosIguales(["a", "b", "c", "d", "e"]));
console.log(todosIguales([1, 1, 1, 1, 1, 1]))
