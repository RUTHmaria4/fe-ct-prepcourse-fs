function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
 if(numeros.length === 0) {
  return null;
 }
 numeros.sort((a, b)=>a -b);
 for (let i = 0; i < numeros.length - 1; i++) {
  if(numeros[i] === numeros [i+1]) {
    return numeros [i]; 
  }
 }
  return null
}

module.exports = encontrarElementoRepetido;



//EJEMPLO
 console.log(encontrarElementoRepetido([2, 2, 3, 4, 5, 5]));
 console.log(encontrarElementoRepetido([1,1, 4, 6, 3, 3, 8, 9]));
 console.log(encontrarElementoRepetido([4, 4, 6, 7, 9, 10]));