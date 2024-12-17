function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  return palabras.join("");

}

module.exports = dePalabrasAFrase;


//EJEMPLO

console.log(dePalabrasAFrase(["H", "e", "l", "l", "o"]));
console.log(dePalabrasAFrase(["Shavinitanai", "maika", "nokoake", "noshinetaka", "tovaiti", "kara"]));
console.log(dePalabrasAFrase(["I", "am", "learning", "english", "every", "day"]));