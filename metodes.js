console.log("Mètodes arrays i strings");

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "

// TODO: provar metodos trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()

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