// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // Agrega el nombre del amigo al arreglo "amigos"
  let nombre = document.getElementById("amigo").value;
  console.log(nombre);

  if (validarNombreDeAmigo(nombre)) {
    amigos.push(nombre);
    limpiarCampoDeEntrda();
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

function limpiarCampoDeEntrda() {
  // Limpia el campo de entrada del nombre del amigo
  document.getElementById("amigo").value = "";
}
