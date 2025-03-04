// Creazione di due variabili che contengono i riferimenti agli elementi HTML con id 'lamp' e 'switchButton'selezionati tramite il metodo document.getElementById() (selettore per id); 
 
const lamp = document.getElementById('lamp');
const switchButton = document.getElementById('switchButton');


// // Variabile booleana on(off) per la lampadina
// let lampOn = false; // false = spenta, true = accesa

// // Aggiungiamo un event listener al bottone
// switchButton.addEventListener('click', function() {
//   // Invertiamo lo stato
//   lampOn = !lampOn;

//     // Istruzioni condizionali per accensione/spegnimento della lampadina;
//     if (lampOn) {
//         lamp.src = 'img/yellow_lamp.png';
//         switchButton.textContent = 'On';
//       } else {
//         lamp.src = 'img/white_lamp.png';
//         switchButton.textContent = 'Off';
//       }
//     });

// RISULTATO ALTERNATIVO UTILIZZANDO include();

// Button event listener
switchButton.addEventListener('click', function() {
  // Istruzioni condizionali per accensione/spegnimento della lampadina;
  if (lamp.src.includes('yellow_lamp.png')) {
    lamp.src = 'img/white_lamp.png';
    switchButton.textContent = 'Off';
  } else {
    lamp.src = 'img/yellow_lamp.png';
    switchButton.textContent = 'On';
  }
});