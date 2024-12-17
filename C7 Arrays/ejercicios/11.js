function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
 return array.map(elemento => {
  if (typeof elemento === "number") {
    return elemento * 2; 
  }
  if (typeof elemento === "string") {
    return elemento +  elemento
  }
  return elemento; 
 }
 )

}

module.exports = duplicarElementos;

//EJEMPLO
console.log(duplicarElementos([1, 1, 9, 9, 3, 3, 3, 1, 4, 5]));
console.log(duplicarElementos(["conejo", "sachavaca", "sajino", "ronsoco", "cuy"]));
console.log(duplicarElementos([]));
