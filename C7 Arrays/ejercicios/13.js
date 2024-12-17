function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
 return array.filter(elemento => elemento % 2 === 0);

}

module.exports = filtrarNumerosPares;



//EJEMPLO

console.log(filtrarNumerosPares([2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filtrarNumerosPares([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8]))
console.log(filtrarNumerosPares([11, 15, 18, 20, 33]))