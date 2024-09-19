
    function filterSelection(color) {
        // Seleccionem tots els elements amb la classe 'box'
        const boxes = document.querySelectorAll('.box');

        // Si la selecció és 'all', afegim la classe 'show' a tots els elements
        if (color === 'all') {
            boxes.forEach(box => {
                box.classList.add('show');
            });
        }
        // Si la selecció és 'none', eliminem la classe 'show' de tots els elements
        else if (color === 'none') {
            boxes.forEach(box => {
                box.classList.remove('show');
            });
        }
        // Per qualsevol altre color, afegim 'show' als elements que coincideixin
        else {
            boxes.forEach(box => {
                // Comprovar si l'element té la classe del color seleccionat
                if (box.classList.contains(color)) {
                    box.classList.add('show');
                } else {
                    box.classList.remove('show');
                }
            });
        }
    }

