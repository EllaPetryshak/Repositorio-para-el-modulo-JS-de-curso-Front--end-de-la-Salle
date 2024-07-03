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

 //TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
  cotxes = [
  {
      marca: "Toyota",
      model: "Corolla",
      any: 2007,
      color: "vermell"
  },
  {
      marca: "Ford",
      model: "Focus",
      any: 2008,
      color: 'blau'
  },
  {
      marca: "Honda",
      model: "Civic",
      any: 2019,
      color: "negre"
  },
  {
      marca: "Opel",
      model: "Astra",
      any: 2012,
      color: "blanc"
  },
  {
      marca: 'Nissan',
      model: "Note",
      any: 2013,
      color: "gris"
  }
];

console.log(cotxes);

 //TODO: cread un array que contenga una lista de una de las propiedades de los objetos

 let llistaDeMarcas = [];
for (let i = 0; i < cotxes.length; i++) {
  llistaDeMarcas.push(cotxes[i].marca);
}
 console.log(llistaDeMarcas);

 //TODO: cread una variable que contenga la suma de una propiedad (que sea numerica)
 let sumaAnys = 0;
 for (let i = 0; i < cotxes.length; i++) {
   sumaAnys += cotxes[i].any;
 }
 console.log(sumaAnys)

 //TODO: monstrar por consola todo lo anterior

 //TODO: monstrar por consola  una frase que resuma las propiedades de cada objeto
 for (let i = 0; i < cotxes.length; i++) {
  const coche = cotxes[i];
  console.log(`El Coche ${i + 1}: Marca ${coche.marca} el model ${coche.model} del any ${coche.any} de color ${coche.color}`);
}

 //TODO: buscad una manera de mostrar todos los objetos por consola en forma de tabla
 console.table(cotxes);

  