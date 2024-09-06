const formulario = document.getElementById('formulario');
const fechaNacimiento = document.getElementById('fecha');

formulario.addEventListener('submit', function(event) {
    const hoy = new Date();
    const fechaUsuario = new Date(fechaNacimiento.value);

    if (fechaUsuario > hoy) {
        event.preventDefault();
        alert('La fecha de nacimiento no puede ser mayor a la fecha actual.');
    }
});