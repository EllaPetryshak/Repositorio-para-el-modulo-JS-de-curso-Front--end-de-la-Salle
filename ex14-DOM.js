
    document.getElementById("generate").addEventListener("click", function() {
        // Seleccionem tots els elements amb la classe 'section'
        const sections = document.querySelectorAll(".section");

        // Inicialitzem una variable per emmagatzemar la carta
        let carta = '';

        // Recorrem cada secció
        sections.forEach(section => {
            // Agafem el text de la secció més propera
            const title = section.querySelector(".title").textContent;
            const content = section.querySelector("p").textContent;

            // Afegim el contingut a la carta amb un format adequat
            carta += `${title}: ${content}\n\n`;
        });

        // Inserim el contingut generat al div de resultat
        document.getElementById("presentation").textContent = carta;
    });
