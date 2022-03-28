// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

let array = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let array3=[]
let stampa=document.getElementById("cont")
let stampa2=document.getElementById("cont2")

let min= parseInt(prompt('inserisci un numero da 0 a 5'))
let max= parseInt(prompt('inserisci un numero da 0 a 5'))

array.forEach((element, index) => {
    console.log(element, index)
    if(index>min && index<max){
        array3.push(element)
    }
});
console.log(array3)
stampa.innerHTML=`l'array finale con il forEach è ${array3}`

let array2 = array.filter(
    (element, index) =>index>min && index<max
)
console.log(array2)
stampa2.innerHTML=`l'array finale con il filter è ${array2}`
