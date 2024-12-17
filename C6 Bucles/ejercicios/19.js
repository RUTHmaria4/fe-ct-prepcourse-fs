function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  
  if (n < 1 ) return 0;
  return (n * (n + 1)) / 2;
}

module.exports = sumarHastaN;



//EJEMPLO

console.log(sumarHastaN(10));
console.log(sumarHastaN(9));
console.log(sumarHastaN(1));
