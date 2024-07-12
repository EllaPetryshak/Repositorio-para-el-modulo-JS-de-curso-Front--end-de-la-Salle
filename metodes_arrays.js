console.log("$metodes d'arrays", "font-weight:bold");
//provar metodes concat(), join(), pop(), push()

animals = ["🐶", "🐱", "🐭", "🐍", "🐘"]
hearts = ["❤", "🧡", "💛", "💚", "💙", "💜"]

console.log(animals, hearts);
console.log(animals.concat(hearts));//une los dos arrays
console.log(amimals.concat("🐮", {nombre:"vaca"}));
console.log([animals, hearts]);// crea un array de arrays

console.log(animals.join ());
console.log(animals.join(" / "));

//pop() elimina el ultimo elemento y lo devuelve
elefant = animals.pop(); 
console.log(animals);
console.log(elefant);
console.log(animals.pop());
console.log(animals);

//push () anade un elemento y devuelve la nueva  lenth del array
console.log(animals);
console.log(animals.push("🐍"));
console.log(animals);

//flat() une en unico array el array y sus subarrays
console.log("%cMètodes d'arrays", "font-weight: bold");

//Omar------------------------------------------------------------------------------------------------

// * provar mètodes concat(), join(), pop(), push(), shift(), unshift(), flat()

animals = ["🐶", "🐱", "🐭", "🐍", "🐘"]
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]

console.log(animals, colors);

console.log(animals.concat("🐮", {nombre: "vaca"}));
console.log(animals.concat(colors)); // une los dos arrays
console.log([animals, colors]);      // crea un array de arrays

console.log(animals.join());
console.log(animals.join(" / "));

// pop() elimina el ultimo elemento y lo devuelve
elefant = animals.pop();

console.log(animals);
console.log(elefant);

console.log(animals.pop());
console.log(animals);

// push() añade un elemento y devuelve la nueva length del array
console.log(animals);
console.log(animals.push("🐍"));
console.log(animals);

// shift() y unshift() hacen lo mismo que pop() y push() pero en el principio del array

// flat() une en un único array el array y sus subarrays
array = [1, 2, [3, 4, 5], [[6, 7], 8]]
console.log(array.flat())           // "aplana" un nivel
console.log(array.flat().flat());   // "aplana" dos niveles

console.log(array.flat(2));  // "aplana" hasta la profundidad que le digamos (puede ser Infinity)

// indexOf() y lastIndexOf() son com els de strings, retornen la primera o la última posició de l'element buscat

// includes() també funciona igual que el de strings (true o false)

// TODO: métodos de ordenación: sort(), reverse(), toSorted(), toReversed()

// TODO: métodos de ordenación compleja: sort()

// TODO: métodos de busqueda compleja: find()

