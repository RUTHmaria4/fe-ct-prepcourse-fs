function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(Array.isArray(arr) && arr.length > 0) {
    return true; 
  }
   return false; 
}

module.exports = esArrayNoVacio;


//EJEMPLO

console.log(esArrayNoVacio(["a", "e", "i", "o", "u"]));
console.log(esArrayNoVacio([1, -2, 4, -4, 1, -9]));
console.log(esArrayNoVacio(["viable", "aprobado", "permitido"]));
console.log(esArrayNoVacio([]));
