console.log("Aquest es el JS d'arrays");

data = ["dog", "🐱", 23, true];

dog = "🐶";
cat = "😺";
raccoon = "🦝";
pig = "🐷";
koala = "🐨"

animals = [dog, cat, raccoon, pig, koala, koala, koala, koala];

console.log(data);
console.log(animals);
console.log(data[1]);//podem accedir els elements d'un array usant el seu INDEX
console.log("l'array data conte " + data.length + " elements");//lenght es una propietat dels arrays
console.log(`l'array data conte ${data.length} elements`);

console.dir(data);

//----------------------------------------------------------------------------------------------------------------------------Objectes

alumne = {
  nom: "Ella",
  cognom: "Petryshak",
  edat: 33,
  hobbie: "programacion",
  animals: [koala, animals[1]]
}

console.log(alumne)

alumne.edat = 36; //escriptura d'una propietat d'un objecte
edatElla = alumne.edat //lectura d'una propitat d'un objecte
console.log(alumne);

console.log(`La ${alumne.nom} ${alumne.cognom} te ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

profe = { motxilla: "🍊", barba: true}
console.log(profe);
profe.nom = "Omar";
profe.edat = 33;
console.log(profe);

/*profe = "Omar";
profe = "Arnau";*/

alumnes = [
  alumne,
  {
    nom: "Joan",
    cognom: "Perez",
    edat: 18,
  }
]

 console.log(alumnes);

 //------------------------------------------------------------------------------------------------

 //TODO: crear un array con 5 objetos dentro que tengan las mismas 4 propiedades
 //TODO: crear un array que contenga una lista de una de las propiedades de los objetos
 //TODO: crear una variable que contenga la suma de una propiedad (que sea numerica)
 //TODO: monstrar por consola todo lo anterior
 //TODO: monstrar por consola  una frase que resuma las propiedades de cada objeto
 //TODO: buscar una manera de mostrar todos los objetos por consola en forma de tabla