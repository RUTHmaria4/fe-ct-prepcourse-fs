function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
 
  let count = 0;
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !== 0) {
      continue; 
    }
    count++;
   }
   return count;
}

module.exports = contarParesConContinue;

//EJEMPLO

console.log(contarParesConContinue([1, 2, 3, 4, 5]));
console.log(contarParesConContinue([6, 7, 8, 9, 10]));
