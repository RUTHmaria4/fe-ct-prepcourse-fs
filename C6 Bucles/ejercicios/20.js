function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   
   if (n < 1){
      return 0;
    
   }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
      if (suma > 100) {
         break;
      }
    }
    return suma;
}

module.exports = sumarHastaNConBreak;


//EJEMPLO: 
console.log (sumarHastaNConBreak(20));
console.log(sumarHastaNConBreak(5));
console.log(sumarHastaNConBreak(3));
