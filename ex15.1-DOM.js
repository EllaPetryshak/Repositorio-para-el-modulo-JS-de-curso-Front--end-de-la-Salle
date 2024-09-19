
    function filterSelection(color) {
        // Seleccionem tots els elements amb la classe 'box'
        const boxes = document.querySelectorAll('.box');

        // Si la selecció és 'all', mostrem tots els elements
        if (color === 'all') {
            boxes.forEach(box => {
                box.classList.add('show');
                box.classList.remove('hide');
            });
        }
        // Si la selecció és 'none', ocultem tots els elements
        else if (color === 'none') {
            boxes.forEach(box => {
                box.classList.remove('show');
                box.classList.add('hide');
            });
        }
        // Si es selecciona un color específic
        else {
            boxes.forEach(box => {
                if (box.classList.contains(color)) {
                    box.classList.add('show');
                    box.classList.remove('hide');
                } else {
                    box.classList.remove('show');
                    box.classList.add('hide');
                }
            });
        }
    }

