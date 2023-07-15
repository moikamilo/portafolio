
const form = document.forms["form"];



form.addEventListener("submit", function(event) {

  
  event.preventDefault();

  
  const nombre = form.elements["nombre"].value;
  const email = form.elements["email"].value;
  const asunto = form.elements["asunto"].value;
  const mensaje = form.elements["mensaje"].value;


  
  if (nombre.trim() === "") {
    alert("Por favor, ingrese su nombre");
    return;
  }

  if (email.trim() === "") {
    alert("Por favor, ingrese su correo electrónico");
    return;
  }

  if (asunto.trim() === "") {
    alert("Por favor, ingrese el asunto del mensaje");
    return;
  }

  if (mensaje.trim() === "") {
    alert("Por favor, ingrese el mensaje");
    return;
  }


  alert("Formulario enviado correctamente");
});
