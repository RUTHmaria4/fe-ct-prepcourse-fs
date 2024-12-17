function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indiceAleatorio = Math.floor (Math.random()*array.length);
   return array[indiceAleatorio];

   
}

module.exports = obtenerElementoAleatorio;


//EJEMPLO

const numeros = [3, 5, 7, 9, 11]
console.log(obtenerElementoAleatorio(numeros));

const colores = ["azul", "celeste", "rojo","black"]
console.log(obtenerElementoAleatorio(colores));