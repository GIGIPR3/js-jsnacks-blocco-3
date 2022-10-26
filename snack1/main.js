/* 

!Snack1*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. 

*/


let array = [];
let sum = 0;

while (sum < 50){
    let numero = parseInt (prompt("inserisci il numero da aggiungere all'array"));
    sum += numero;
    array.push(numero);
}

console.log (array);
console.log(sum);
