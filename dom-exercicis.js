//Exercici 1

// Accedim al botó utilitzant el seu id
const btn = document.getElementById('salutacioBtn1');

// Afegim un esdeveniment de clic que crida la funció
btn.addEventListener('click', function() {
    console.log("Hola, Usuari");
});

//Exercici 2

const inputNom = document.getElementById('nomUsuari');
const botóSaludar = document.getElementById('salutacioBtn2');

// Funció per saludar
function saludar() {
    const nom = inputNom.value.trim(); // Agafem el valor i eliminem espais en blanc
    if (nom) {
        console.log(`Hola, ${nom}!`);
    } else {
        console.log("Hola, Usuari! Si us plau, introdueix el teu nom.");
    }
}

// Afegim l'esdeveniment de clic al botó
botóSaludar.addEventListener('click', saludar);

//Eercici 3

// Agafem els elements del DOM
const input = document.getElementById('nomUsuari3');
const boto = document.getElementById('salutacioBtn3');
const salutacioSpan = document.getElementById('salutacio3');

// Afegim un esdeveniment 'click' al botó
boto.addEventListener('click', function() {
    // Agafem el valor del camp de text
    const nom = input.value;

    // Verifiquem si el camp de text té contingut i mostrem el missatge al costat del botó
    if (nom) {
        salutacioSpan.textContent = ` Hola, ${nom}!`;
    } else {
        salutacioSpan.textContent = " Si us plau, introdueix el teu nom.";
    }
});

//Exercici 4

const input4 = document.getElementById('nomUsuari4');
const btn4 = document.getElementById('salutacioBtn4');
const salutacioSpan4 = document.getElementById('salutacio4');

// Afegim un esdeveniment 'click' al botó
btn4.addEventListener('click', function() {
    // Agafem el valor del camp de text
    const nom = input4.value;

    // Agafem el pronom seleccionat
    const pronom = document.querySelector('input[name="pronom"]:checked').value;

    // Verifiquem si el camp de text té contingut i mostrem el missatge
    if (nom) {
        salutacioSpan4.textContent = ` ${pronom} és ${nom}.`;
    } else {
        salutacioSpan4.textContent = " Si us plau, introdueix el teu nom.";
    }
});

//exercici 5
const input5 = document.getElementById('nomUsuari5');
const select = document.getElementById('colorSeleccio');
const btn5 = document.getElementById('salutacioBtn5');

// Afegim un esdeveniment 'click' al botó
btn5.addEventListener('click', function() {
    // Agafem el valor del camp de text
    const nom = input5.value;

    // Agafem el color seleccionat
    const color = select.value;

    // Verifiquem si el camp de text té contingut i mostrem el missatge amb el color seleccionat
    if (nom) {
        console.log(`%cHola, ${nom}!`, `color: ${color}`);
    } else {
        console.log("Si us plau, introdueix el teu nom.");
    }
});

 //exercici 6

  // Agafem els elements del DOM
  const input6 = document.getElementById('nomUsuari6');
  const select6 = document.getElementById('colorSeleccio6');
  const btn6 = document.getElementById('salutacioBtn6');
  const salutacioSpan6 = document.getElementById('salutacio6');

  // Afegim un esdeveniment 'click' al botó
  btn6.addEventListener('click', function() {
      // Agafem el valor del camp de text
      const nom6 = input6.value;

      // Agafem el color seleccionat
      const color6 = select6.value;

      // Verifiquem si el camp de text té contingut
      if (nom6) {
          // Modifiquem el contingut i color del text al span
          salutacioSpan6.textContent = ` Hola, ${nom6}!`;
          salutacioSpan6.style.color = color6;
      } else {
          salutacioSpan6.textContent = " Si us plau, introdueix el teu nom.";
          salutacioSpan6.style.color = "black";  // Color per defecte
      }
  });

  //exercici 7

  const input7 = document.getElementById('nomUsuari7');
  const colorPicker = document.getElementById('colorSeleccio7');
  const btn7 = document.getElementById('salutacioBtn7');
  const salutacioSpan7 = document.getElementById('salutacio7');

  // Afegim un esdeveniment 'click' al botó
  btn7.addEventListener('click', function() {
      // Agafem el valor del camp de text
      const nom7 = input7.value;

      // Agafem el color seleccionat
      const color7 = colorPicker.value;

      // Verifiquem si el camp de text té contingut
      if (nom7) {
          // Modifiquem el contingut i color del text al span
          salutacioSpan7.textContent = ` Hola, ${nom7}!`;
          salutacioSpan7.style.color = color7;
      } else {
          salutacioSpan7.textContent = " Si us plau, introdueix el teu nom.";
          salutacioSpan7.style.color = "black";  // Color per defecte
      }
  });
 
  //exercici 8
  const input8 = document.getElementById('temperaturaCelsius');
        const btn8 = document.getElementById('convertirBtn');
        const resultatP = document.getElementById('resultat');

        // Afegim un esdeveniment 'click' al botó
        btn8.addEventListener('click', function() {
            // Agafem el valor de la temperatura en Celsius
            const celsius = parseFloat(input8.value);

            // Comprovem si el valor introduït és un nombre
            if (!isNaN(celsius)) {
                // Converteix de Celsius a Fahrenheit
                const fahrenheit = (celsius * 9/5) + 32;
// Mostra el resultat al paràgraf
resultatP.textContent = `${celsius}°C són ${fahrenheit.toFixed(2)}°F`;
} else {
    // Missatge d'error si no s'introdueix un número vàlid
    resultatP.textContent = "Si us plau, introdueix una temperatura vàlida en graus Celsius.";
}
});

//exercici 9
 // Agafem els elements del DOM
 const inputTemperatura = document.getElementById('temperatura');
 const unitatOrigen = document.getElementById('unitatOrigen');
 const unitatDesti = document.getElementById('unitatDesti');
 const btn9 = document.getElementById('convertirBtn9');
 const resultatP9 = document.getElementById('resultat9');

 // Funció per convertir la temperatura
 function convertirTemperatura(temperatura, origen, desti) {
     let tempEnCelsius;
     // Convertir a Celsius primer
     if (origen === 'celsius') {
      tempEnCelsius = temperatura;
  } else if (origen === 'fahrenheit') {
      tempEnCelsius = (temperatura - 32) * 5 / 9;
  } else if (origen === 'kelvin') {
      tempEnCelsius = temperatura - 273.15;
  }

  // Convertir de Celsius a la unitat de destí
  let temperaturaConvertida;
  if (desti === 'celsius') {
      temperaturaConvertida = tempEnCelsius;
  } else if (desti === 'fahrenheit') {
      temperaturaConvertida = (tempEnCelsius * 9 / 5) + 32;
  } else if (desti === 'kelvin') {
      temperaturaConvertida = tempEnCelsius + 273.15;
  }

  return temperaturaConvertida;
}
 // Afegim un esdeveniment 'click' al botó
 btn9.addEventListener('click', function() {
  // Agafem la temperatura i les unitats seleccionades
  const temperatura = parseFloat(inputTemperatura.value);
  const origen = unitatOrigen.value;
  const desti = unitatDesti.value;

  // Comprovem si el valor introduït és un nombre vàlid
  if (!isNaN(temperatura)) {
      // Convertim la temperatura
      const resultat = convertirTemperatura(temperatura, origen, desti);

      // Mostrem el resultat amb dues decimals
      resultatP9.textContent = `${temperatura}°${origen.charAt(0).toUpperCase()} convertit a ${desti.charAt(0).toUpperCase()} és ${resultat.toFixed(2)}°${desti.charAt(0).toUpperCase()}.`;
  } else {
      // Missatge d'error si no s'introdueix un número vàlid
      resultatP9.textContent = "Si us plau, introdueix una temperatura vàlida.";
  }
});

//exercici 10
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacioSelect = document.getElementById('operacio');
const calcularBtn = document.getElementById('calcularBtn');
const resultatP10 = document.getElementById('resultat10');

// Funció per realitzar l'operació seleccionada
function calcular(num1, num2, operacio) {
    let resultat10;
    switch (operacio) {
      case 'suma':
          resultat10 = num1 + num2;
          break;
      case 'resta':
          resultat10 = num1 - num2;
          break;
      case 'multiplicacio':
          resultat10 = num1 * num2;
          break;
      case 'divisio':
          if (num2 !== 0) {
              resultat10 = num1 / num2;
          } else {
              resultat10 = "No es pot dividir per 0";
          }
          break;
          default:
                    resultat10 = "Operació no vàlida";
            }

            return resultat10;
        }

        // Afegim un esdeveniment 'click' al botó
        calcularBtn.addEventListener('click', function() {
            // Agafem els valors dels inputs
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            const operacio = operacioSelect.value;

            // Comprovem si els valors introduïts són números vàlids
            if (!isNaN(num1) && !isNaN(num2)) {
                // Realitzem l'operació
                const resultat10 = calcular(num1, num2, operacio);

                // Mostrem el resultat
                resultatP10.textContent = `Resultat: ${resultat10}`;
            } else {
                // Missatge d'error si no s'introdueixen números vàlids
                resultatP10.textContent = "Si us plau, introdueix números vàlids.";
            }
        });

        //ecercici 11
        // Agafem els elements del DOM
        const pantalla = document.getElementById('pantalla');
        const botons = document.querySelectorAll('.botons button');
        let operand1 = '';
        let operand2 = '';
        let operacioActual = '';
        let operacio11 = '';

        // Funció per actualitzar la pantalla
        function actualitzarPantalla(valor) {
            pantalla.value = valor;
        }

        // Funció per realitzar el càlcul
        function calcular() {
            const num1 = parseFloat(operand1);
            const num2 = parseFloat(operand2);
            let resultat;

            switch (operacioActual) {
                case '+':
                    resultat = num1 + num2;
                    break;
                case '-':
                    resultat = num1 - num2;
                    break;
                case '×':
                    resultat = num1 * num2;
                    break;
                case '÷':
                    if (num2 !== 0) {
                        resultat = num1 / num2;
                    } else {
                        resultat = "Error";
                    }
                    break;
                default:
                    resultat = "Error";
            }

            return resultat;
        }

        // Event listeners per als botons
        botons.forEach(boton => {
            boton.addEventListener('click', () => {
                const valor = boton.textContent;

                if (valor === 'C') {
                    // Esborra la pantalla i restableix les variables
                    actualitzarPantalla('');
                    operand1 = '';
                    operand2 = '';
                    operacioActual = '';
                } else if (valor === '=') {
                    // Realitza el càlcul i mostra el resultat
                    if (operand1 && operand2 && operacioActual) {
                        const resultat = calcular();
                        actualitzarPantalla(resultat);
                        operand1 = resultat;
                        operand2 = '';
                        operacioActual = '';
                    }
                } else if (['+', '-', '×', '÷'].includes(valor)) {
                    // Estableix l'operació actual
                    operacioActual = valor;
                    operand1 = pantalla.value;
                    operand2 = '';
                    actualitzarPantalla('');
                } else {
                    // Afegim el número o el caràcter al visor
                    if (operacioActual && !operand2) {
                        operand2 = valor;
                        actualitzarPantalla(operand2);
                    } else {
                        actualitzarPantalla(pantalla.value + valor);
                        operand2 = pantalla.value + valor;
                    }
                }
            });
        });


