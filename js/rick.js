let contenedorPersonajes = document.getElementById('personajes');

/*Utilizando la API Fetch */
fetch('https://rickandmortyapi.com/api/character')
.then((response)=>response.json())
.then((datos)=>{

  console.log("*********datos*********");
  console.log(datos);
  console.log("*********datos*********");

  console.log("*********datos.info*********");
  console.log(datos.info);
  console.log("*********datos.info*********");
  
  console.log("*********datos.results*********");
  console.log(datos.results);
  console.log("*********datos.results*********");

  /*
    Itero los personajes devueltos por la API con un forEach
    Luego creo elementos html para agregar nombre e imagen de cada personaje.
  */

  var personajes = datos.results;

  personajes.forEach(element => {
    console.log(element.name);
    const contenedorIndividual = document.createElement('div');
    contenedorIndividual.classList.add('tarjeta');
    contenedorIndividual.innerHTML = `
      <h4>${element.name}</h4>
      <img src="${element.image}">
    `;
    contenedorPersonajes.append(contenedorIndividual);
  });
})