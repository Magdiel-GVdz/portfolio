document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar aquí lógica JavaScript para cargar tus proyectos dinámicamente
    
    // Ejemplo de cómo agregar un proyecto de forma dinámica
    const proyectosSection = document.getElementById('proyectos');
    
    const nuevoProyecto = document.createElement('div');
    nuevoProyecto.classList.add('proyecto');

    const imagenProyecto = document.createElement('img');
    imagenProyecto.src = 'ruta_de_la_imagen.jpg';
    imagenProyecto.alt = 'Descripción del proyecto';

    const tituloProyecto = document.createElement('h2');
    tituloProyecto.textContent = 'Nombre del Proyecto';

    const descripcionProyecto = document.createElement('p');
    descripcionProyecto.textContent = 'Breve descripción del proyecto.';

    nuevoProyecto.appendChild(imagenProyecto);
    nuevoProyecto.appendChild(tituloProyecto);
    nuevoProyecto.appendChild(descripcionProyecto);

    proyectosSection.appendChild(nuevoProyecto);
});
