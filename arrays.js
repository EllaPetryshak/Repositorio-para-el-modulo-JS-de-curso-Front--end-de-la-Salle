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