

// TODO: mostra les taules de multiplicar del 1 al 9 per la consola

// Funció per imprimir una taula de multiplicar
function taulaDeMultiplicar(num) {
  console.log(`Taula de multiplicar del ${num}:`);
  for (let i = 1; i <= 9; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
  }
  console.log(""); // Linea en blanc per separar les taules
}

// Imprimir les taules de multiplicar del 1 al 9
for (let i = 1; i <= 9; i++) {
  taulaDeMultiplicar(i);
}


// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

function parseCustomFloat(str) {
  // Primer, reemplaça separadors decimals diferents per un únic símbol ('.')
  // T'assegures que només es mantingui el primer separador decimal trobat i eliminar els altres
  let result = str
      .replace(/,/g, '.')   // Reemplaça ',' amb '.'
      .replace(/'(?=\d)/g, '.') // Reemplaça apostrofes seguides de dígits amb '.'
      .replace(/[^0-9.]/g, ''); // Elimina qualsevol caràcter que no sigui dígit o '.'
  
  // Assegura't que només hi hagi un separador decimal
  // Troba la primera aparició del separador decimal
  const decimalIndex = result.indexOf('.');

  if (decimalIndex !== -1) {
      // Separa la part abans i després del primer separador decimal
      const beforeDecimal = result.substring(0, decimalIndex);
      const afterDecimal = result.substring(decimalIndex + 1).replace(/\./g, ''); // Elimina els separadors decimals addicionals

      // Recombina les parts amb només un separador decimal
      result = beforeDecimal + '.' + afterDecimal;
  }

  // Si la cadena resultant és buida, retorna 0
  return result ? parseFloat(result) : 0;
}

// Proves
console.log(parseCustomFloat("hola89'234"));
console.log(parseCustomFloat("43'35adeu")); 
console.log(parseCustomFloat("amor45.9odi"));
console.log(parseCustomFloat("234.1234.25.5")); 

  


// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)




// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

function separateWords(text) {
  let result = '';
  let inWord = false;

  // Recorre cada caràcter del text
  for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      // Comprova si el caràcter és una lletra (majúscula o minúscula)
      if (/[a-zA-Z]/.test(char)) {
          if (!inWord) {
              // Si no estem actualment dins d'una paraula, afegim un espai només si hi ha paraules prèviament
              if (result.length > 0) {
                  result += ' ';
              }
              inWord = true;
          }
          result += char;
      } else {
          // Si el caràcter no és una lletra, indiquem que hem sortit d'una paraula
          inWord = false;
      }
  }

  return result;
}

// Prova
console.log(separateWords("Hello-world!"));          // "Hello world"


// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)
function getRandomWord(text) {
    let wordCount = 0;
    let inWord = false;
    
    // Primera passada: Comptar el nombre de paraules
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (/[a-zA-Z]/.test(char)) {
            if (!inWord) {
                wordCount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    
    // Si no hi ha paraules, retorna null
    if (wordCount === 0) {
        return null;
    }
    
    // Generar un índex aleatori de paraula
    const randomIndex = Math.floor(Math.random() * wordCount);
    
    // Segona passada: Trobar la paraula en la posició aleatòria
    let currentWordIndex = 0;
    let currentWord = '';
    inWord = false;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (/[a-zA-Z]/.test(char)) {
            if (!inWord) {
                if (currentWordIndex === randomIndex) {
                    currentWord = char;
                }
                inWord = true;
            } else if (currentWordIndex === randomIndex) {
                currentWord += char;
            }
        } else {
            if (inWord) {
                if (currentWordIndex === randomIndex) {
                    break;
                }
                currentWordIndex++;
            }
            inWord = false;
        }
    }
    
    return currentWord;
}

// Proves
console.log(getRandomWord("Hola! ¿Cómo estás?"));    // Una paraula aleatòria de "Hola Cómo estás"
console.log(getRandomWord("1234@#$%"));              // null (no hi ha paraules)
console.log(getRandomWord("A quick brown fox."));    // Una paraula aleatòria de "A quick brown fox"
console.log(getRandomWord("Hello-world!"));          // Una paraula aleatòria de "Hello world"


// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari
function generateAndCheckBirthdays(num) {
  const birthdaySet = new Set();

  for (let i = 0; i < num; i++) {
      const randomDay = Math.floor(Math.random() * 365) + 1;

      if (birthdaySet.has(randomDay)) {
          return true; // Hi ha una coincidència
      }

      birthdaySet.add(randomDay);
  }

  return false; // No hi ha coincidències
}

function checkBirthdayParadox() {
  const testValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  testValues.forEach(N => {
      const result = generateAndCheckBirthdays(N) ? 'Coincidència trobada' : 'No hi ha coincidències';
      console.log(`N = ${N}: ${result}`);
  });
}

// Executar la funció per mostrar els resultats
checkBirthdayParadox(21);


// TODO: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes
// data0 = "NOM Omar"
// data1 = "COG Olmedo"   -> [data0, data1, data2, ...]
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"

// La funció ha de retornar un objecte així:

// {
//     nom: "Omar",
//     cognom: "Olmedo",
//     edat: 33
// }
// Funció per convertir un array de strings a un objecte
function arrayToObject(dataArray) {
  let resultat = {};
  dataArray.forEach(data => {
      let parts = data.split(' ');
      let clau = parts[0].toLowerCase();
      let valor = parts.slice(1).join(' ');
      
      // Mapatge de claus a propietats de l'objecte
      if (clau === "nom") {
          resultat.nom = valor;
      } else if (clau === "cog") {
          resultat.cognom = valor;
      } else if (clau === "age") {
          resultat.edat = parseInt(valor, 10);
      }
  });
  return resultat;
}

// Funció per convertir una string a un objecte
function stringToObject(dataString) {
  // Dividim la string en un array de sub-strings
  let dataArray = dataString.split(' ');
  let resultat = {};
  
  for (let i = 0; i < dataArray.length; i += 2) {
      let clau = dataArray[i].toLowerCase();
      let valor = dataArray[i + 1];
      
      // Mapatge de claus a propietats de l'objecte
      if (clau === "nom") {
          resultat.nom = valor;
      } else if (clau === "cog") {
          resultat.cognom = valor;
      } else if (clau === "age") {
          resultat.edat = parseInt(valor, 10);
      }
  }
  return resultat;
}

// Exemples d'ús
let dataArray = ["NOM Omar", "COG Olmedo", "AGE 33"];
let dataString = "NOM Omar COG Olmedo AGE 33";

let objecteDeArray = arrayToObject(dataArray);
let objecteDeString = stringToObject(dataString);

console.log(objecteDeArray); // { nom: "Omar", cognom: "Olmedo", edat: 33 }
console.log(objecteDeString); // { nom: "Omar", cognom: "Olmedo", edat: 33 }


// TODO: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array d'objectes amb els noms de les columnes com a propietats
// PISTA: necessitareu ajuda. Demaneu-la
// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

/*var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`
*/
// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];

function csvToArray(csv) {
  // Separar les línies
  var lines = csv.split('\n');
  
  // La primera línia conté les capçaleres
  var headers = lines[0].split(',');
  
  // Crear una llista d'objectes a partir de les línies restants
  var result = lines.slice(1).map(function(line) {
      // Separar cada columna de la línia
      var values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      
      // Crear un objecte amb les capçaleres com a claus i els valors corresponents
      var obj = {};
      headers.forEach(function(header, index) {
          obj[header] = values[index].replace(/(^"|"$)/g, ''); // Eliminar cometes dobles
      });
      return obj;
  });
  
  return result;
}

var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`;

var cotxes = csvToArray(csv);
console.log(cotxes);


function canPlantFlowers(flowerbed, k) {
  let count = 0; // Count of new flowers that can be planted
  let n = flowerbed.length;
  
  for (let i = 0; i < n; i++) {
      if (flowerbed[i] === 0) {
          // Check if the left and right positions are also empty or out of bounds
          let emptyLeft = (i === 0) || (flowerbed[i - 1] === 0);
          let emptyRight = (i === n - 1) || (flowerbed[i + 1] === 0);
          
          if (emptyLeft && emptyRight) {
              flowerbed[i] = 1; // Plant a flower
              count++;
              
              if (count >= k) {
                  return true; // We've planted enough flowers
              }
          }
      }
  }
  
  return count >= k;
}

// Example usage:
console.log(canPlantFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlantFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlantFlowers([0, 0, 0, 0, 0], 3)); // true
console.log(canPlantFlowers([1, 0, 1, 0, 1], 1)); // false
