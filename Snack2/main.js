// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. (modificato) 

let squadre=[
    {
        'nome':'Lazio',
        'punti': 0,
        'falliSubiti': 0
    },
    {
        'nome':'Verona',
        'punti': 0,
        'falliSubiti': 0
    },
    {
        'nome':'Inter',
        'punti': 0,
        'falliSubiti': 0
    },
    {
        'nome':'Fiorentina',
        'punti': 0,
        'falliSubiti': 0
    },
    {
        'nome':'Sampdoria',
        'punti': 0,
        'falliSubiti': 0
    },
]
let squadre2=[]
let stampa=document.getElementById('cont')


function random(max) {
    return Math.floor(Math.random()*max +1)
}

for(i=0;i<squadre.length;i++){
    squadre[i]['punti']=random(100)
    squadre[i]["falliSubiti"]=random(50)
    let {nome, falliSubiti }= squadre[i]
    squadre2.push({nome, falliSubiti})
    stampa.innerHTML+=
    `<div class="squadre">
        il nome della squadra è ${nome} <br>
        i falli subiti in questa stagione sono: ${falliSubiti}
    <div/>`
}


console.log(squadre)
console.log(squadre2)

