/* 
! Snack 2
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/

let array = [];

let sum = 0;

for (i = 0; i < 5; i++ ){
    let numero = parseInt(prompt("inserisci un numero"));
    array.push(numero);
    sum += array[i];
}

console.log(sum);

