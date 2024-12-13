function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(num);
}

module.exports = esEntero;

//EJEMPLO:
console.log(esEntero(30));
console.log(esEntero(-12));
console.log(esEntero(0)); 
console.log(esEntero(0.23));

