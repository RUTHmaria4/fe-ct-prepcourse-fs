function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
var arr = [];
for(let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  num += 2;
  arr.push(num);
}
 return arr; 
}

module.exports = continueStatement;


//EJEMPLO

console.log(continueStatement([200, 40, 45, 66])); 
console.log(continueStatement([0, 1, 0, 2, 0, 3]));
console.log(continueStatement([50, 23, 21, 45, 64]));

