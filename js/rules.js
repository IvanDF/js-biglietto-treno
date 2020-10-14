/**
*
*  CALCOLATORE COSTO BIGLIETTO DEI TRENI
*
**/

// DISTANZA DA PERCORRERE
var kmTratta = parseInt( prompt('Distanda da percorrere') );

if (kmTratta >= 1) {
} else {
  alert('non é un numero é pregato di ricaricare la pagina ed inserire i dati corretti');
}

// ETÁ DEL PASSEGGERO
var anniUtente = parseInt( prompt('Quanti anni hai') );

// CALCOLO COSTO DEL BIGLIETTO (0.21€/km)
var costoTratta = kmTratta * 0.21 + '€';
console.log(costoTratta);

// CALCOLO SCONTO IN BASE ALL'ETÁ
