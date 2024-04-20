function showRegistrationOptions() {
    var initialContent = document.getElementById("initialContent");
    var registrationOptions = document.getElementById("registrationOptions");

    initialContent.style.display = "none"; // Oculta content1
    registrationOptions.style.display = "block"; // Muestra content2
}

function showInitialContent() {
    var initialContent = document.getElementById("initialContent");
    var registrationOptions = document.getElementById("registrationOptions");

    initialContent.style.display = "block"; // Muestra el contenido inicial
    registrationOptions.style.display = "none"; // Oculta el formulario de registro
}

function validarTelefono(event) {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10);
}
