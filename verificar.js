function verificarDNI (dni){
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
  // Verificar que el DNI tenga exactamente 9 caracteres
  if (dni.length !== 9) return false;

  // Extraer los 8 dígitos y la letra
  const numero = dni.slice(0, 8);
  const letra = dni[8].toUpperCase();

  // Verificar que los primeros 8 caracteres sean números
  if (!numero.match(/^\d{8}$/)) return false;

  // Calcular la letra correcta
  const letraCalculada = letras[parseInt(numero, 10) % 23];

  // Comparar la letra proporcionada con la calculada
  return letra === letraCalculada;
}

function validarTarjetaCredito(numero) {
  // Eliminar caracteres no numéricos
  numero = numero.replace(/\D/g, '');

  // Verificar longitud mínima
  if (numero.length < 13) return false;

  let suma = 0;
  let esDoble = false;

  // Aplicar el algoritmo de Luhn
  for (let i = numero.length - 1; i >= 0; i--) {
      let digito = parseInt(numero[i], 10);
      if (esDoble) {
          digito *= 2;
          if (digito > 9) digito -= 9;
      }
      suma += digito;
      esDoble = !esDoble;
  }

  // Verificar si la suma es divisible por 10
  return suma % 10 === 0;
}