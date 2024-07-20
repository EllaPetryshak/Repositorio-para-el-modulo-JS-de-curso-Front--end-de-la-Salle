console.log("%cBucles", "font-weight: bold");

for (let i = 0; i < 10; i++) {  // inicialización del contador, comprobación para seguir, incremento
    console.log("Hola " + i);
}

console.log("----------------------");

for (let i = 9; i >= 0; i--) {
    console.log("Hola " + i);
}

console.log("----------------------");

alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++) {  // ejecuta el bucle tantas veces como elementos tiene el array
    console.log("Hola, " + alumnos[i]);
}

console.log("----------------------");

for (const alumno of alumnos) {     // recorrer un array sin indice
    console.log("Hola, " + alumno);
    // ! alumnos[alumnos.indexOf(alumno)] = "Omar"         MALA IDEA
  }

  for (let i = 0; i < alumnos.length; i++) {  // recorrer un array con indice
      // const alumno = alumnos[i];
      // console.log("Hola, " + alumno);
      alumnos[i] = alumnos[i].toUpperCase()  // modifica los elementos del array
  }
  
  console.log("----------------------");
  
  professor = {
      nom: "Omar",
      cognoms: "Olmedo Ferrer",
      edat: 33,
      localitat: "Piera"
  }
  
  for (const propietat in professor) {
      if (Object.hasOwnProperty.call(professor, propietat)) {
          const element = professor[propietat];
          console.log(`La propietat ${propietat} del professor té un valor de ${element}`);
      }
  }
  
  console.log("----------------------");
  
  let i = 0;
  while (i < 10) {
    console.log("Hola " + i);
    i++;
}

console.log("----------------------");

alumnos.forEach(alumno => {
    console.log("Hola, " + alumno);
});


console.log("---------------------- mis exercicis");
  
for (let i = 4; i < 23; i++) {
  console.log("numero " + i);
}
console.log("----------------------");



animales = ["leon", "gorilla", "perro", "gato", "rata", "conejo", "oveja"]

for (let i = 0; i < alumnos.length; i++) { 
    console.log("Esto es  " + animales[i]);
}

// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
      console.log(`%cMensaje número ${i + 1}`, "color: red");
  } else {
      console.log(`%cMensaje número ${i + 1}`, "color: blue");
  }
}


console.log("----------------------");

// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5
for (let i = 0; i <= 20; i++) {
  let message = '';

  if (i % 2 === 0) {
      message += "hola"; 
  }
  if (i % 3 === 0) {
      message += (message ? ', ' : '') + "adeu";
  }
  if (i % 5 === 0) {
      message += (message ? ', ' : '') + "què tal?";
  }

  console.log(`${i}: ${message}`);
}

// TODO: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre (fins a 1000 com a màxim) (p.e. "234" mostra 2, 3, 4, 12, 13, 14, 20, 21, 22, 23, 24... , 47, 48, 49, 52, 53, 54...)

// Solicitar al usuario que introduzca un número
const userInput = prompt("Introduce un número (1-1000):");

// Convertir la entrada a un número entero
const maxNumber = parseInt(userInput, 10);

// Validar que la entrada es un número válido y está en el rango permitido
if (!isNaN(maxNumber) && maxNumber >= 1 && maxNumber <= 1000) {
    // Convertir el número a una cadena para obtener sus dígitos
    const userInputString = userInput.toString();
    
    console.log(`Números del 1 al ${maxNumber} que contienen los dígitos de ${userInput}:`);
    
    // Usar un bucle `for` para iterar sobre los números del 1 al `maxNumber`
    for (let i = 1; i <= maxNumber; i++) {
        // Convertir el número actual a una cadena
        const numberString = i.toString();
        
        // Verificar si el número contiene alguno de los dígitos del número introducido
        if (numberString.split('').some(digit => userInputString.includes(digit))) {
            console.log(i);
        }
    }
} else {
    console.log("La entrada no es válida. Introduce un número entre 1 y 1000.");
}

// TODO: fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100
/*const userInput = prompt("Introduce una cadena de dígitos (por ejemplo, '123'):");
for (let i = 0; i <= 100; i++) {
  
  }*/
  

// TODO: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau (useu BREAK); fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:       
//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

//-----------------------------------------------Omar
// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) console.log("%cHolis, soy un mensaje azul 💙", "color: blue");  // pares
  else console.log("%cHolis, soy un mensaje rosa 💗", "color: pink");             // impares
}

// TODO: escribe un bucle que muestre los números del 1 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

for (let i = 1; i < 21; i++) {
  let missatge = i
  if (i % 2 === 0) missatge += " hola"
  if (i % 3 === 0) missatge += " adeu"
  if (i % 5 === 0) missatge += " què tal?"
  console.log(missatge);
}
