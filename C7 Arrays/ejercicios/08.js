function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   return array.indexOf(num);
}

module.exports = encontrarElemento;

//EJEMPLO:

const numeros = [1, 2, 3, 4, 5]
 console.log(encontrarElemento(4, numeros));
 console.log(encontrarElemento(7, numeros));

const string = ["mesa", "tabla", "silla", "escritorio", "laptop"];
console.log(encontrarElemento("tabla", string));