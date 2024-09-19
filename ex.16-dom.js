
        function setStyle(style) {
            // Eliminar classes anteriors de body i header
            document.body.classList.remove('classic', 'modern', 'futurist');
            document.querySelector('.header').classList.remove('classic', 'modern', 'futurist');
            
            // Afegir la classe seleccionada a body i header
            if (style === 'classic') {
                document.body.classList.add('classic');
                document.querySelector('.header').classList.add('classic');
            } else if (style === 'modern') {
                document.body.classList.add('modern');
                document.querySelector('.header').classList.add('modern');
            } else if (style === 'futurist') {
                document.body.classList.add('futurist');
                document.querySelector('.header').classList.add('futurist');
            }
        }

        // Establir estils per defecte
        setStyle('classic');
    