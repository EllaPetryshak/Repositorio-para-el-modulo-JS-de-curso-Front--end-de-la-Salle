

// TODO: mostra les taules de multiplicar del 1 al 9 per la consola

for (let i = 1; i <= 9; i++) {
  console.log(`Taula del ${i}:`);
  for (let k = 1; k <= 9; k++){
    console.log(`${i} x ${k} = ${i * k}`);
  }
  console.log("");
}

// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

function customParseFloat(input) {
    // Defineix els caràcters vàlids i el separador decimal desitjat
    const validChars = "0123456789.,'-+";
    let numberStr = " ";
    let decimalPointReplaced = false;

    // Recorre la cadena d'entrada
    for (let char of input) {
        if (validChars.includes(char)) {
            if (char === '.' || char === ',' || char === "'") {
                // Substitueix el primer separador decimal per un punt
                if (!decimalPointReplaced) {
                    numberStr += '.';
                    decimalPointReplaced = true;
                }
            } else {
                numberStr += char;
            }
        }
    }

    // Converteix la cadena a número flotant
    return parseFloat(numberStr);
}

// Proves
console.log(customParseFloat("hola89'234"));
console.log(customParseFloat("43'35adeu")); 
console.log(customParseFloat("amor45.9odi"));
console.log(customParseFloat("234.1234.25.5")); 

  
  



// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

function lletraAleatoria (input) {
  let lletres = [];
  for (let char of input) {
    if ((char >= "A" && char <= "Z")|| (char >= "a" && char <= "z")){
      lletres.push(char);
    }
  }
  if (lletres.length === 0){
    return null;
  }
  const aleatotiIndex = Math.floor(Math.random() * lletres.length);
  return lletres[aleatotiIndex]
}
console.log(lletraAleatoria("Hello, Ella"));
console.log(lletraAleatoria("233 6677"));

// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)
function separateWords(input) {
  let result = '';
  let word = '';
  
  for (let i = 0; i < input.length; i++) {
      let char = input[i];
      
      // Comprovem si el caràcter és una lletra
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
          word += char; // Afegeix el caràcter a l'actual paraula
      } else if (char === ' ' || (char < 'a' || char > 'z' && char < 'A' || char > 'Z')) {
          // Si trobem un espai o un signe de puntuació i tenim una paraula
          if (word.length > 0) {
              result += word + ' '; // Afegeix la paraula a result amb un espai
              word = ''; // Reiniciem la paraula
          }
      }
  }
  
  // Afegim l'última paraula si existeix
  if (word.length > 0) {
      result += word;
  }

  // Eliminem l'espai extra al final si n'hi ha
  return result.trim();
}

// Exemples d'ús
console.log(separateWords("Hola, mon! Com estas?")); // "Hola món Com estàs"
console.log(separateWords("Aquest es un exemple.")); // "Aquest és un exemple"
console.log(separateWords("JavaScript: es genial!")); // "JavaScript és genial"
console.log(separateWords("123 456,!!!")); // ""
  
// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

       

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

function generateRandomBirthdays(n) {
  const birthdays = [];
  
  for (let i = 0; i < n; i++) {
      // Genera una data d'aniversari aleatòria entre 1 i 365
      const birthday = Math.floor(Math.random() * 365) + 1;

      // Comprova si la data ja existeix a l'array
      for (let j = 0; j < birthdays.length; j++) {
          if (birthdays[j] === birthday) {
              // Si hi ha una coincidència, retornem true
              return true;
          }
      }
      
      // Si no hi ha coincidència, afegim la data a l'array
      birthdays.push(birthday);
  }
  
  // Si acabem el bucle sense coincidències, retornem false
  return false;
}

function checkBirthdayParadox() {
  const ns = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  ns.forEach(n => {
      const hasCollision = generateRandomBirthdays(n);
      if (hasCollision) {
          console.log(`Per N = ${n}, hi ha coincidències d'aniversari.`);
      } else {
          console.log(`Per N = ${n}, no hi ha coincidències d'aniversari.`);
      }
  });
}

// Executa la funció per mostrar els resultats
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
  const result = {};
  dataArray.forEach(item => {
      const [key, value] = item.split(' ');
      switch (key) {
          case 'NOM':
              result.nom = value;
              break;
          case 'COG':
              result.cognom = value;
              break;
          case 'AGE':
              result.edat = parseInt(value, 10);
              break;
          default:
              console.warn(`Unknown key: ${key}`);
      }
  });
  return result;
}




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

//exercici img nl2

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
