function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let resultado = null; 
for (let i = 0; i < secuencia.length; i++) {
  if(secuencia[i] % n === 0) {
    resultado = secuencia[i];
    break; 
    }
  }
  return resultado !== undefined ? resultado: null; 
}

module.exports = encontrarPrimerMultiploDeN;


//EJEMPLO

console.log(encontrarPrimerMultiploDeN(3, [3, 6, 9, 12, 18, 21, 24]));
console.log(encontrarPrimerMultiploDeN(5,[5, 10, 15, 20, 30]));
console.log(encontrarPrimerMultiploDeN(6,[9,16, 24, 34]));