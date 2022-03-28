// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

 let students = [
     { name: 'Marco', id: 213, grades: 78 },
     { name: 'Paola', id: 110, grades: 96 },
     { name: 'Andrea', id: 250, grades: 48 },
     { name: 'Gaia', id: 145, grades: 74 },
     { name: 'Luigi', id: 196, grades: 68 },
     { name: 'Piero', id: 102, grades: 50 },
     { name: 'Francesca', id: 120, grades: 84 },
   ];
   let stampa1=document.getElementById("cont1")
   let stampa2=document.getElementById("cont2")
   let stampa3=document.getElementById("cont3")

//    students.forEach((element,index) => {
//     console.log(element.name)
//    });
let arrayNomi= students.map(
    (element)=>{
        return element.name.toUpperCase()
    }
)
console.log(arrayNomi);

stampa1.innerHTML=
`
<p>La stampa di tutti i nomi in maiuscolo ${arrayNomi}</p>
`

let arrayVoti=students.filter(
    (element)=>element.grades>70
    )

console.log(arrayVoti)
arrayVoti.forEach((element, index) => {
    stampa2.innerHTML=`gli studenti con voto maggiore di 70 sono:`
    stampa3.innerHTML+=`<li>${arrayVoti[index].name} con voto ${arrayVoti[index].grades}</li> `
});






