// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
   return Math.round(num);

}

module.exports = redondearNumero;

//EJEMPLO

console.log(redondearNumero(8.987));
console.log(redondearNumero(10.4532));
console.log(redondearNumero(1.2347));

