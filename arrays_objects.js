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
  hobbie: "programacion"
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
