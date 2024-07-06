console.log("Mètodes arrays i strings");

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "

// TODO: provar metodos trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()

console.log(text.trim());
console.log("text".padStart(9, "0"));
console.log("text".padEnd(9, "x"));
textAll = text.trim().replaceAll(" ", "-");
console.log(textAll);
console.log(text.replace("l'0mar", "l'Ella"));
console.log(text.replaceAll(" ", "-"));
console.log(text.split(","));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.slice(0, 10));

console.log(text.includes('escrit'));
console.log(text.indexOf("una"));
console.log(text.startsWith("Omar"));
console.log(text.endsWith("mètodes   "));
