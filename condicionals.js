console.log("%ccondicionals", "font-weight:bold");
if(true){
  console.log("se ha  cumplido mi condicion!");
}

console.log("%cCondicionals", "font-weight: bold");


text = prompt("Introdueix el text")

/*if (text.length > 20) {
    console.log("Se ha cumplido mi condición!");
}*/

nom = prompt("Introdueix el teu nom")

if (nom == "Omar") console.log("Hola, Omar!");
else console.log("No eres Omar... Hola, desconocido!");

/* 
if (nom == "Omar") {
    console.log("Hola, Omar!");
} else {
    console.log("No eres Omar... Hola, desconocido!");
} */

animal = "perro"
color = "verde"

if (animal == "perro") {
    console.log("Sácalo a pasear");
} else if(animal == "gato") {
    console.log("Limpia el arenero");
} else if (animal == "perro" && color == "verde") { // aquí no llega porque la primera condicion ya es true
    console.log("Qué raro eres!");
} else if (animal == "caballo") {
    console.log("Sal a cabalgar");
} else if (animal == "pez") {
    console.log("Ponle de comer");
} else {
    console.log("Pobrecito, no tienes ni gato ni perro ni caballo ni pez");
}

if (animal == "perro" || animal == "gato") console.log("Eres una básica");
// ! if (animal == "perro" || "gato") console.log("Eres una básica"); ERROR DE CONDICIÓN

animals = ["perro", "jerbo", "caballo", "pez"]

if (animals.includes("perro") && color == "verde") console.log("Qué raro eres!");
if (animals.includes("gato")) console.log("Limpia el arenero");
if (animals.includes("perro")) console.log("Sácalo a pasear");
if (animals.includes("caballo")) console.log("Sal a cabalgar");

if (animal == "pez") console.log("Ponle de comer"); 
else console.log("Pobrecito, no tienes pez");

personas = 4

switch (personas) {
    case 1:
        console.log("No aceptamos reservas para uno");
        break;
    case 2:
        console.log("Buenas noches, parejita");
        break;
    case 3:
        console.log("Hehehe sois multitud");
        break;
    case 4:
        console.log("¿Cita doble?");
        break;
    case 5:
        console.log("¡¡Cuánta gente!!");
        break;
    default:
        console.log("Eso no es un número aceptable");
        break;
}

// * Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !

console.log(1 == "1");
console.log(1 === "1");

user = prompt("Introdueix el teu nom d'usuari")

if (!user) {
    console.log("No estas logueado!");
} else {
    console.log("Bienvenido, " + user);
}

// TODO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)

function cuidadoAnimal() {
 animal = prompt("Ingrese un animal (perro, gato, pez, hamster, pájaro):").toLowerCase();
 mensaje = "";

  switch (animal) {
      case "perro":
          mensaje = "🐶 Asegúrate de darle alimento balanceado, agua fresca, paseos diarios, y llevarlo al veterinario regularmente.";
          break;
      case "gato":
          mensaje = "🐱 Proporciónale alimento específico para gatos, agua fresca, un lugar cómodo para dormir, y juguetes para mantenerlo activo.";
          break;
      case "pez":
          mensaje = "🐠 Mantén el acuario limpio, alimenta al pez con comida específica, y controla la temperatura y calidad del agua.";
          break;
      case "hamster":
          mensaje = "🐹 Proporciona una jaula limpia con sustrato adecuado, alimento balanceado, y una rueda para hacer ejercicio.";
          break;
      case "pájaro":
          mensaje = "🐦 Dale una jaula espaciosa, alimento para pájaros, agua fresca, y tiempo fuera de la jaula para volar.";
          break;
      default:
          mensaje = "Lo siento, no tengo instrucciones para ese animal.";
  }

  alert(mensaje);
}


cuidadoAnimal();

// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

function verificarNombreCompuesto() {
nombreCompleto = prompt("Ingrese su nombre completo:");

  if (!nombreCompleto) {
      console.log("No ingresaste ningún nombre.");
      return;
  }

  esCompuesto = nombreCompleto.includes(" ");

  if (esCompuesto) {
      console.log("Tu nombre es compuesto.");
  } else {
      console.log("Tu nombre no es compuesto.");
  }
}


verificarNombreCompuesto();

// TODO: crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)
  function calcularOperacion() {
  numero1 = prompt("Ingrese el primer número:");
  numero2 = prompt("Ingrese el segundo número:");
  const simbolo = prompt("Ingrese el símbolo de la operación (+, -, *, /, %):");

  const operaciones = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => {
          if (b === 0) {
              console.log("Error: No se puede dividir entre cero.");
              return null;
          }
          return a / b;
      },
      '%': (a, b) => a % b
  };
  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingrese números válidos.");
    return;
}

calcular = operaciones[simbolo];

if (calcular) {
    const resultado = calcular(numero1, numero2);
    console.log(`El resultado de ${numero1} ${simbolo} ${numero2} es: ${resultado}`);
} else {
    console.log("Símbolo de operación no válido.");
}
}
calcularOperacion();
// TODO: crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"
function realizarPedido() {
  prenda = prompt("¿Qué prenda deseas? (camiseta, pantalon, gorra)").toLowerCase();
  color = prompt("¿Qué color prefieres?");
  talla = prompt("¿Qué talla prefieres? (S, M, L, XL)").toUpperCase();

  let emoji;
  
  switch (prenda) {
      case 'camiseta':
          emoji = '👕';
          break;
      case 'pantalon':
          emoji = '👖';
          break;
      case 'gorra':
          emoji = '🧢';
          break;
      default:
          console.log("Prenda no válida.");
          return;
  }

  console.log(`Has pedido una ${prenda} ${emoji} ${color} ${talla}`);
}

realizarPedido();
