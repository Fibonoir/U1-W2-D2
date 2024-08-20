/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* 
let max;
const num1 =  parseInt(prompt("Inserisci un numero intero:"));
const num2 = parseInt(prompt("inseriscine un'altro:"));
if (num1 > num2) {
  max = num1;
  console.log(max);
} else if (num1 < num2) {
  max = num2;
  console.log(max);
} else {
  console.log("I numeri inseriti sono uguali: " + num1 + " - " + num2);
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* 
const number = parseInt(prompt("Inserisci un numero:"));

if (number !== 5){
  console.log("not equal")
}else{
  console.log("numero uguale a 5")
} 
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* 
const number = parseInt(prompt("Inserisci un numero:"));

if (number % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* 
const num1 = parseInt(prompt("Inserisci primo numero: "));
const num2 = parseInt(prompt("Inserisci secondo numero: "));

if (num1 ===8 || num2 === 8){
  console.log("Uno dei due valori è 8");
} else{
  console.log("Nessuno dei due valori è 8")
}
if (num1+num2 === 8 || num1-num2 === 8){
  console.log("La loro addizione o sottrazione è uguale ad 8")
}else{
  console.log("Ne l'addizione o la sottrzione sono uguali ad 8")
}
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* 
const totalShoppingCart = parseFloat(prompt("A quanto ammonta il carrello?"));

if (totalShoppingCart > 50){
  console.log("Fantastico!!! Hai diritto alla spedizione gratuita. Paghi solo " + totalShoppingCart);
} else {
  console.log("Totale " + (totalShoppingCart + 10) + "€: " + totalShoppingCart + " + 10€ di spedizione");
}
 */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* 
const totalShoppingCart = parseFloat(prompt("Per il Black Friday hai il 20% di sconto. A quanto ammonta il carrello?"));
const discountedTotal = totalShoppingCart - (totalShoppingCart*0.20);

if (totalShoppingCart > 50){
  console.log("Fantastico!!! Hai diritto alla spedizione gratuita. Paghi solo " + discountedTotal);
} else {
  console.log("Totale " + (discountedTotal + 10) + "€: " + discountedTotal + " + 10€ di spedizione");
}
 */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* 
const num1 = 60;
const num2 = 70;
const num3 = 80;

if (num1 >= num2 && num1 >= num3){
  if (num2 >= num3){
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2)
  }
} else if (num2 >= num1 && num2 >= num3){
  if (num1 >= num3){
    console.log(num2, num1, num3)
  } else {
    console.log(num2, num3, num1)
  }
} else if(num1 >= num3){
  console.log(num3, num1, num2)
} else {
  console.log(num3, num2, num1)
}
 */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* 
const x = prompt("Inserisci un numero: ");
const num = Number(x);

if (!isNaN){
  console.log("Il valore inserito è un numero")
} else {
  console.log("Il valore insertio non è un numero")
}
 */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* 
const num = prompt("Inserisci un numero");

if (num % 2 === 0){
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
} */


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if(val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }
*/


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const emptyArray = [];

emptyArray.push(1);
emptyArray.push(2);
emptyArray.push(3);
emptyArray.push(4);
emptyArray.push(5);
emptyArray.push(6);
emptyArray.push(7);
emptyArray.push(8);
emptyArray.push(9);
emptyArray.push(10);

console.log(emptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

emptyArray[emptyArray.length - 1] = 100;

console.log(emptyArray);
