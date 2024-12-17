function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 const maxNum = Math.max(...array);
 return array.indexOf(maxNum);


}

module.exports = encontrarIndiceMayor;


//EJEMPLO

console.log(encontrarIndiceMayor([9, 8, 7, 5]))
console.log(encontrarIndiceMayor([4.4, 4.3, 3.4, 2.4]));
console.log(encontrarIndiceMayor([]));
