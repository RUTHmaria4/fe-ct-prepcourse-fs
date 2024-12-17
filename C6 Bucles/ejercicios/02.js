function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  if(booleano1 === true && booleano2 === false){
    return true;
  } else{
    return false;
  }
}

module.exports = esVerdaderoYFalso;

//EJEMPLO

console.log(esVerdaderoYFalso(true,false));
console.log(esVerdaderoYFalso(true, true))
console.log(esVerdaderoYFalso(false, true));
console.log(esVerdaderoYFalso(false,false));

