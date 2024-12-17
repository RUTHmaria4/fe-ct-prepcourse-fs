function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  return texto.split("").reverse().join("");
}

module.exports = invertirTexto;


//EJEMPLO:


console.log(invertirTexto("Hey")); 

console.log(invertirTexto("airaM"));

console.log(invertirTexto("lisarB"));