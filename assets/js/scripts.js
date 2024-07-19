document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function() {
    const comentarioInput = document.getElementById("comentario");
    const comentarioCounter = document.getElementById("comentarioCounter");
    const maxChars = 300;

    // Inicializar el contador con el número de caracteres permitidos
    comentarioCounter.textContent = `Te quedan ${maxChars} caracteres.`;

    comentarioInput.addEventListener("input", function() {
        let inputValue = comentarioInput.value;

        // Limitar la longitud del comentario a 300 caracteres
        if (inputValue.length > maxChars) {
            inputValue = inputValue.substring(0, maxChars);
            comentarioInput.value = inputValue;
        }

        // Actualizar el contador de caracteres restantes
        const charsLeft = maxChars - inputValue.length;
        comentarioCounter.textContent = `Te quedan ${charsLeft} caracteres.`;
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const email = document.getElementById('email').value;

    // Expresión regular para verificar que el nombre solo contenga letras
    const nombreRegex = /^[A-Za-z\s]+$/;

    // Expresión regular para verificar que el email sea válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !comentario || !email) {
        alert('Todos los campos son obligatorios.');
    } else if (!nombreRegex.test(nombre)) {
        alert('El nombre solo puede contener letras.');
     } else if (!emailRegex.test(email)) {
            alert('El email no es válido.');
    } else if (comentario.length > 300) {
        alert('El comentario no puede exceder los 300 caracteres.');
    } else {
        alert('Formulario enviado correctamente.');
    }
});

                                                        
