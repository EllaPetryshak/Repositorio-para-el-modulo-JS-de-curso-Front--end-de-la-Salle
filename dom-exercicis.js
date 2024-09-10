//Exercici 1

// Accedim al botó utilitzant el seu id
const btn = document.getElementById('salutacioBtn');

// Afegim un esdeveniment de clic que crida la funció
btn.addEventListener('click', function() {
    console.log("Hola, Usuari");
});

//Exercici 2

   // Agafem els elements del DOM
   const input = document.getElementById('nomUsuari');
   const boton = document.getElementById('salutacioBtn');
   const missatge = document.getElementById('missatgeSalutacio');

   // Afegim un esdeveniment 'click' al botódom 
   btn.addEventListener('click', function() {
       // Agafem el valor del camp de text
       const nom = input.value;

       // Verifiquem si el camp de text té contingut
       if (nom) {
           // Modifiquem el contingut del paràgraf
           missatge.textContent = `Hola, ${nom}!`;
       } else {
           missatge.textContent = "Si us plau, introdueix el teu nom.";
       }
   });