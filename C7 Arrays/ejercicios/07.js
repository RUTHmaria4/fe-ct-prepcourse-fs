function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

    return array.sort((a, b) => a-b);
}

module.exports = ordenarArray;



//EJEMPLO

console.log(ordenarArray(["hola", "hello", "oga", "nijao"]))
console.log(ordenarArray([]));
console.log(ordenarArray([1.2, 1.3, 1.4, 1.5, 1.6]));
