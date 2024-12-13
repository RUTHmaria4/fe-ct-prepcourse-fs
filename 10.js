function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if(num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
}

module.exports = esDiezOCinco;

//EJEMPLO

console.log(esDiezOCinco(9));
console.log(esDiezOCinco(12));
console.log(esDiezOCinco(5));
