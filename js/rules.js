/**
*
*  CALCOLATORE COSTO BIGLIETTO DEI TRENI
*
**/

// DISTANZA DA PERCORRERE
var kmTratta = parseInt( prompt('Inserire la distanza da percorrere in Km') );

if (isNaN(kmTratta) === true )  {
  alert('I dati inseriti non sono corretti, aggiornare la pagina ed inserirli correttamente');
}

document.getElementById('km-tratta').innerHTML = kmTratta + 'Km';

// CALCOLO COSTO DEL BIGLIETTO (0.21€/km)
var costoTratta = parseInt(kmTratta * 0.21);

// ETÁ DEL PASSEGGERO
var anniUtente = parseInt( prompt('Inserire la propria etá') );

if (isNaN(anniUtente) === true )  {
  alert('I dati inseriti non sono corretti, aggiornare la pagina ed inserirli correttamente');
}

document.getElementById('anni').innerHTML = anniUtente

// CALCOLO SCONTO IN BASE ALL'ETÁ
if (anniUtente < 18) {
  var scontoVenti = costoTratta * 0.20;
      costoTratta = costoTratta - scontoVenti;
  alert('Hai diritto allo sconto del 20%');
  document.getElementById('sconto').innerHTML = 'Hai diritto allo sconto <br> "Under 18" del 20%'
} else if (anniUtente > 65) {
  var scontoQuaranta = costoTratta * 0.40;
      costoTratta = costoTratta - scontoQuaranta;
  alert('Hai diritto allo sconto del 40%');
  document.getElementById('sconto').innerHTML = 'Hai diritto allo sconto <br> "Over 65" del 40%'
}

// RISULTATO FINALE
var prezzoFinale = costoTratta.toFixed(2) + ' €';
document.getElementById('costo-tot').innerHTML = prezzoFinale;
