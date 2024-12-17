function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
    var arr = []
    for ( let i = 0; i < 10; i++) {
      num += 2; 

      if(num === i) {
        return "Se interrumpió la ejecución"
      }
      arr.push(num);
    }
    return arr;
}

module.exports = breakStatement;



console.log(breakStatement(5, 6));
console.log(breakStatement(2, 4, 3));
console.log(breakStatement(1, 2, 3, 4, 5));
