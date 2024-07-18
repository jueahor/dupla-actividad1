document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const email = document.getElementById('email').value;

    if (!nombre || !comentario || !email) {
        alert('Todos los campos son obligatorios.');
    } else {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar el código para enviar el formulario
    }
});
                                                        
