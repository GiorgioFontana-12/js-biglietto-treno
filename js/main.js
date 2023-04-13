alert ( `Benvenuto nella biglietteria online piu conveniente inserire i dati richiesti:` )

let kmPercorsi = prompt (`quanti km dovrai percorrere?`)
let eta = prompt (`quanti anni hai?`)

parseInt(kmPercorsi)
parseInt(eta)

let costoTotale   = ( kmPercorsi * 0.21  )

let scontoMinori  = ( costoTotale * 0.2  )
let scontoAnziani = ( costoTotale * 0.45 )

let prezzoMinori  = ( costoTotale - scontoMinori )
let prezzoAnziani = ( costoTotale - scontoAnziani)

if (eta < 18 ){
    alert ( "il costo del tuo biglietto è: " + prezzoMinori.toFixed(2) +  "€" )
} else if (eta > 60) {
    alert ( "il costo del tuo biglietto è: " + prezzoAnziani.toFixed(2) + "€" )    
} else {
    alert ( "il costo del tuo biglietto è: " + costoTotale.toFixed(2) +   "€" )
}

