// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bici=[
   
    {
        'nome':'va-lentino',
        'peso':'2550gr'
    },
    {
        'nome':'si poteva fare meglio',
        'peso':'1950gr'
    },
    {
        'nome':'velociraptor',
        'peso':'850gr'
    },
    {
        'nome':'cosa con due ruote',
        'peso':'1740gr'
    }


]

let stampa=document.getElementById('cont')
let stampa2=document.getElementById('bici')

let pesoMinore =bici[0]
for(i=0; i<bici.length; i++){
    stampa2.innerHTML+=`<p>${[i+1]}) ${bici[i].nome} ${bici[i].peso}</p>`
    let x= bici[i]
    if(pesoMinore['peso'] < x['peso'] ){
        pesoMinore=x
    }
    
}
console.log(pesoMinore)

stampa.innerHTML=`
la bici col peso minore è ${pesoMinore.nome} col peso di ${pesoMinore.peso}
`