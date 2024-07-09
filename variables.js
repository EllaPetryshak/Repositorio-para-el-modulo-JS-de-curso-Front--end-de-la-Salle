//userName es una variable que tiene dentro una string
userName = "Ella";
userSurname = 'Petryshak';
const ESPACIO = " ";
let userTitle = 'Student';//una string con backticks es un template literal
console.log(userName)
console.log("Ella");
console.log(userSurname);
console.log(userTitle);
console.log(userSurname, userName, userTitle);
console.log(userName + ' ' + userSurname + ' ' + userTitle);
userName = "Rodrigo";
console.log(`Que tal estas, ${userName} ${userSurname} ?`);

userAge = 33; //Number
userExperience = 10;
userHasHair = true; //Boolean
console.log(userName + userAge);
console.log(userName + userExperience);

console.log ("Edad: " + userAge, "anos de experiencia");
//ESPACIO = " "

a = 1;
b = 2;

c = a;
a = b;
b = c;

//TODO: afegiu el codi

console.log(a, b) //2, 1
 /*[a, b] = [b, a]*/
 console.log(a, b); //1, 2


//TODO: arrays, objects

/*const PI = "3.1415"
radi = 4
console.log("L'area del cercle es:" + PI*radi**2);

cercle = {
  radi: "4 metros",
  area: PI*radi**2 + "metros cuadrados"
}
console.log(cercle);
console.log(typeof cercle.area);*/

// ----------------------------------------------------------------------------

// Transformació de tipus de variables

const PI = "3.1415"
radi = 4.5

console.log("L'àrea del cercle és: " + PI*radi**2);

cercle = {
    area: PI*radi**2 + " metros cuadrados"
}

console.log(typeof cercle.area, typeof parseFloat(cercle.area));

radiString = radi.toString()

console.log(radiString, typeof radiString);
console.log(" ");

data = {
  data0: PI,
  data1: parseFloat(PI),
  data2: parseInt(PI),
  data3: radi,
  data4: radi.toString()
}

console.log(data.data0, typeof data.data0);
console.log(data.data1, typeof data.data1);
console.log(data.data2, typeof data.data2);
console.log(data.data3, typeof data.data3);
console.log(data.data4, typeof data.data4);


