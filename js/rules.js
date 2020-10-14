/**
*
*  CALCOLATORE COSTO BIGLIETTO DEI TRENI
*
**/

// DISTANZA DA PERCORRERE
var kmTratta = parseInt( prompt('Distanda da percorrere') );

if (isNaN(kmTratta) === true )  {
  alert('non é un numero é pregato di ricaricare la pagina ed inserire i dati corretti');
}

// CALCOLO COSTO DEL BIGLIETTO (0.21€/km)
var costoTratta = parseInt(kmTratta * 0.21);

// ETÁ DEL PASSEGGERO
var anniUtente = parseInt( prompt('Quanti anni hai') );

if (isNaN(kmTratta) === true )  {
  alert('non é un numero é pregato di ricaricare la pagina ed inserire i dati corretti');
}

// CALCOLO SCONTO IN BASE ALL'ETÁ
if (anniUtente < 18) {
  var scontoVenti = costoTratta * 0.20;
  costoTratta = costoTratta - scontoVenti;
  alert('Hai diritto allo scondo del 20%');
} else if (anniUtente > 65) {
  var scontoQuaranta = costoTratta * 0.40;
  costoTratta = costoTratta - scontoQuaranta;
  alert('Hai diritto allo scondo del 40%');
}

// RISULTATO FINALE
var prezzoFinale = costoTratta + '€';

console.log(prezzoFinale);
