
const url = "https://pruebasalle-a1814-default-rtdb.europe-west1.firebasedatabase.app/"
const project = "ella-petryshak/"
const database = "prueba.json"

// Función para obtener datos desde Firebase
fetch(url + project + database)
.then(res => res.json())
.then(res => {
  console.log(res);
  
  let idAlumne;

  // Busca el ID de "Carlos"
  for (const id in res) {
    if (res[id].nom == "Ella") {
      idAlumne = id;
      break;
    }
  }

  console.log("ID de Ella: " + idAlumne);
})
.catch(error => console.error("Error al obtener datos:", error));

// Función para añadir un nuevo alumno
function postAlumne(nom, edat, pelo) {
fetch(url + project + database, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nom, edat, pelo })
})
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.error("Error al añadir alumno:", error));
}