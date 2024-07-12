console.log("Mètodes arrays i strings");

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "

// TODO: provar metodos trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()
// ! els mètodes d'strings no modifiquen la string, en generen una de nova ⚠

console.log(text.trim());
console.log("text".padStart(9, "0"));
console.log("text".padEnd(9, "x"));
textAll = text.trim().replaceAll(" ", "-");
console.log(textAll);
result = text.replace("l'Omar", "Ella");
console.log(result);
console.log(text.replace("l'0mar", "l'Ella"));
console.log(text.replaceAll(" ", "-"));
words = text.split(" ");
console.log(words[8]);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.slice(0, 10));

console.log(text.includes('escrit'));
console.log(text.indexOf("una"));
console.log(text.startsWith("Omar"));
console.log(text.endsWith("mètodes   "));

nom="Omar";
console.log(text.indexOf(nom));
console.log(text.slice(text.indexOf(nom)));
console.log(text.slice(text.indexOf(nom), text.indexOf(nom + nom.lenght)));


console.log(text.trim());

a = "text"

console.log(a.padStart(10, "-"));
console.log(a.padEnd(10, "-"));
console.log(a.padEnd(10, "-").padStart(20, "-"));
console.log(a.padEnd(a.length + 10, "-").padStart(a.length + 20, "-"));


dni = "12345678A"
console.log("DNI completo: " + dni);
console.log("DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X"));

email = "OmarOlmedoFerrer@Inventado.com"
console.log(email.toLowerCase());
console.log(email.toUpperCase());

console.log("Text original: '" + text + "'");
console.log("Text alterat: '" + text.trim().replace("l'Omar", "el profe") + "'");

alter = text.trim().replace("l'Omar", "el profe");

textAlt = text.trim().replaceAll(" ", "_") // guardo la string amb els espais canviats per guions baixos

console.log("Text sense espais: '" + textAlt + "'");
console.log("Text original: '" + text + "'");

console.log(text.trim().split(" "));

// provar mètodes de cerca indexOf(), includes(), ...With()

nom = "Omar"
console.log(text.indexOf(nom));
console.log(text.slice(text.indexOf(nom)));
console.log(text.slice(text.indexOf(nom), text.indexOf(nom) + nom.length));

console.log(text.includes(nom));
console.log(text.includes("Carlos"));

console.log("Text comença amb 'Aquesta': " + text.trim().startsWith("Aquesta"));
console.log("Text comença amb 'Aquestes': " + text.trim().startsWith("Aquestes"));

console.log("Text acaba amb 'mètodes': " + text.trim().endsWith("mètodes"));
console.log("Text acaba amb 'mètode': " + text.trim().endsWith("mètode"));

// censurar el nom en el text de dalt
censura = "el profe"

console.log("Text normal: " + text);
console.log("Text censurat: " + text.replace(nom, "".padEnd(nom.length, "X")));
console.log("Text censurat: " + alter.replace(censura, "".padEnd(censura.length, "X")));

// TODO: gestionar dades així amb bucles i condicionals (Això pel futur)

data0 = "NOM Omar"
data1 = "COG Olmedo"
data2 = "AGE 33"

data = "NOM Omar COG Olmedo AGE 33"
