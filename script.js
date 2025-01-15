
document.getElementById("contact-from").addEventListener('submit', function(event) {

    event.preventDefault();

    const nombre = document.getElementById("Nombre-usuario");
    const email = document.getElementById("email-usuario");
    const asunto = document.getElementById("Asunto-usuario");
    const mensaje = document.getElementById("mensaje-usuario");
    const mensajeError = document.getElementById("error-message")

    if(nombre.value ===""){
        mensajeError.textContent = "Por favor, ingrese su nombre.";
        mensajeError.classList.remove("hidden");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
        mensajeError.textContent = "Por favor, ingrese su email.";
        mensajeError.classList.remove("hidden");
        return;
    }

    if(asunto.value ===""){
        mensajeError.textContent = "Por favor, ingrese el asunto.";
        mensajeError.classList.remove("hidden");
        return;
    }

    nombre.value = "";
    email.value = "";
    asunto.value = "";
    mensaje.value = "";

    mensajeError.classList.add("hidden");
    alert("Formulario enviado con éxito!");
})