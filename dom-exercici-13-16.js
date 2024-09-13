//exercici 13
// Referències als elements del DOM
const nomInput = document.getElementById('nomInput');
const materialSelect = document.getElementById('materialSelect');
const tamañoSelect = document.getElementById('tamañoSelect');
const missatgeInput = document.getElementById('missatgeInput');
const generarBtn = document.getElementById('generarBtn');
const outputText = document.getElementById('outputText');

// Funció per generar el missatge
function generarMissatge() {
    const nom = nomInput.value.trim();
    const material = materialSelect.value;
    const tamaño = tamañoSelect.value;
    const missatge = missatgeInput.value.trim();
    if (nom === '') {
      outputText.textContent = 'Si us plau, introdueix el teu nom.';
      return;
  }

  let textFinal = `${nom} ha pedido una caja de ${material} tamaño ${tamaño}`;

  // Afegir el missatge personalitzat si n'hi ha un
  if (missatge !== '') {
      textFinal += ` (${missatge})`;
  }
  outputText.textContent = textFinal;
}

// Event listener pel botó "Generar Missatge"
generarBtn.addEventListener('click', generarMissatge);
