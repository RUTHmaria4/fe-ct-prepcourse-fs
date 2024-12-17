function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x>y){
    return x;
  } else if (y>x){
    return y;
  } else {
    return x;
  }
}

module.exports = obtenerMayor;


console.log(obtenerMayor(19,20))
console.log(obtenerMayor(3,8));
console.log(obtenerMayor(31,40));