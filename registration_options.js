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


var inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="tel"], input[type="email"]');
// Agrega eventos focus y blur a cada campo de entrada
inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        // Al hacer clic en el campo de entrada, oculta la etiqueta
        input.previousElementSibling.classList.add('input-focus');
    });

    input.addEventListener('blur', function() {
        // Verifica si el campo está vacío al salir del foco
        if (input.value === '') {
            input.previousElementSibling.classList.remove('input-focus');
        }
    });
});

function validarTelefono(event) {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10);
}
