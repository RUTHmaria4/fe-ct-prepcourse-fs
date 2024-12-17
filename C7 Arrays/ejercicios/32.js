function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:


  let textoNormalizado = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  let textoInvertido = textoNormalizado.split("").reverse().join("");
   
  return textoNormalizado === textoInvertido;

}

module.exports = esPalindromo;


//ALGUNOS EJEMPLOS:

console.log(esPalindromo("Maria"));
console.log(esPalindromo("agua, tinaja, bebe, mama, papa"));
console.log(esPalindromo("madam"));
console.log(esPalindromo("oso"))