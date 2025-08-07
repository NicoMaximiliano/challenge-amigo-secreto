// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // Agrega el nombre del amigo al arreglo "amigos"
  let nombre = document.getElementById("amigo").value;
  nombre = nombre.toUpperCase(); // Convierte el nombre a mayúsculas

  if (validarNombreDeAmigo(nombre)) {
    amigos.push(nombre);
    agregarAmigoALaLista(nombre);
    limpiarCampoDeEntrada();
  }

  console.log(amigos);
}

function validarNombreDeAmigo(nombre) {
  // Valida que el nombre del amigo no esté vacío
  if (nombre.trim() === "") {
    alert("El nombre del amigo no puede estar vacío.");
    return false;
  }
  return true;
}

function limpiarCampoDeEntrada() {
  // Limpia el campo de entrada del nombre del amigo
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus(); // Enfoca el campo de entrada después de limpiar
}

function agregarAmigoALaLista(amigo) {
  // Agrega el nombre del amigo a la lista en el HTML
  let lista = document.getElementById("listaAmigos");
  //   lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
  let li = document.createElement("li");
  li.textContent = amigo;
  lista.appendChild(li);
}

function sortearAmigo() {
  // Sortea un amigo al azar del arreglo "amigos" y muestra su nombre en el HTML
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista antes de mostrar el amigo sorteado
  document.getElementById("resultado").innerHTML = amigoSorteado;
  console.log("Amigo sorteado: " + amigoSorteado);
}
