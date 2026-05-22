// Función para mostrar una unidad específica
function mostrarUnidad(numero) {
    // Ocultar todas las secciones
    document.getElementById('portada').classList.remove('activa');

    for (let i = 1; i <= 5; i++) {
        document.getElementById('unidad' + i).classList.remove('activa');
    }

    // Mostrar la unidad seleccionada
    document.getElementById('unidad' + numero).classList.add('activa');
}

// Función para volver a la portada
function mostrarPortada() {
    // Ocultar todas las unidades
    for (let i = 1; i <= 5; i++) {
        document.getElementById('unidad' + i).classList.remove('activa');
    }

    // Mostrar portada
    document.getElementById('portada').classList.add('activa');
}
