
    function generarMensaje() {
        // Obtener los valores de los inputs
        const nombre = document.getElementById('name').value;
        const material = document.getElementById('material').value;
        const tamaño = document.getElementById('size').value;
        const mensaje = document.getElementById('message').value;

        // Crear el mensaje de salida
        const resultado = `${nombre} ha pedido una caja de ${material} tamaño ${tamaño} (con ${mensaje})`;

        // Escribir el mensaje en el HTML
        document.getElementById('result').innerText = resultado;
    }
