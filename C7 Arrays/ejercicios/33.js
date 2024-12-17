function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  let resultado = "";
  let strings = [str1, str2, str3].filter(str => str.length > 0);
  let longitudMaxima = Math.max(...strings.map(str => str.length));

  for (let i = 0; i < longitudMaxima; i++) {
    strings.forEach(str => {
    if (i < str.length) {
      resultado += str[i];
    }
    })
    
  }
  return resultado;
}

module.exports = combine;


//EJEMPLOS DE ESTE CODIGO

console.log(combine("wow", "exercise", "cooking"));
console.log(combine("together", "part", "take"));
console.log(combine("time", "city", "center"));