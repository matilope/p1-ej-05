"use strict";

let numero;

function ingresar() {
  do {
    numero = parseInt(prompt("Ingresa un numero"));
  } while (isNaN(numero));
}

function mostrar() {
    if(numero===0){
        console.info(`El numero es ${numero}.`);
    }
    if(!(numero%2)&&numero!==0){
        console.info(`El numero ${numero} es par.`);
    }
    if(numero%2){
        console.info(`El numero ${numero} es impar.`);
    }
}
