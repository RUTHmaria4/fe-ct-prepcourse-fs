function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  return x%y;
}

module.exports = obtenerResto;


//EJEMPLO

console.log(obtenerResto(20,3));
console.log(obtenerResto(2,3));
console.log(obtenerResto(45,30));