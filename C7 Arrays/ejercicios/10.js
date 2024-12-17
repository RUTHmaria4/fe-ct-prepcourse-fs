function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for(let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array [i];
    }
  }
  return undefined;
}

module.exports = obtenerPrimerStringLargo;

//EJEMPLO

const palabras = ["amor", "alegria", "entusiasmo", "certeza", "conviccion"];
console.log(obtenerPrimerStringLargo(palabras));

const moneda = ["1 sol", "1 dolar", "1 peso chileno", "1peso argentino", "yuan"];
console.log(obtenerPrimerStringLargo(moneda));

const escuelas = ["primaria", "secundaria", "instituto", "universidad"];
console.log(obtenerPrimerStringLargo(escuelas));