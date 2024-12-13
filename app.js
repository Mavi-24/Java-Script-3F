document.addEventListener("DOMContentLoaded", () => {
    // Botón para cargar películas
    const loadMoviesButton = document.getElementById("load-movies");
    const moviesContainer = document.getElementById("movies-container");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrar-modal");
    const tituloModal = document.getElementById("titulo-modal");
    const descripcionModal = document.getElementById("descripcion-modal");
    const calificacionModal = document.getElementById("calificacion-modal");

    // Cargar las películas al cargar la página
    cargarPeliculas();

    loadMoviesButton.addEventListener("click", () => {
        fetchMovies();
    });

    // Función para obtener datos de la API
    async function fetchMovies() {
        const apiKey = "53470810b320e3a583673bc6f79f0fc8"; 
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al obtener los datos de la API");

            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error(error);
            moviesContainer.innerHTML = "<p>Error al cargar las películas. Intenta de nuevo más tarde.</p>";
        }
    }

    // Función para mostrar las películas en el DOM
    function displayMovies(movies) {
        moviesContainer.innerHTML = ""; // Limpiar contenedor

        movies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.innerHTML = `
                <h3>${movie.title}</h3>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
                <p>Calificación: ${movie.vote_average}/10</p>
            `;
            moviesContainer.appendChild(movieElement);

            // Evento de clic para mostrar detalles de las peliculas:
            movieElement.addEventListener("click", () => mostrarDetallesPelicula(movie));
        });
    }

    // Función para mostrar detalles de cada película 
    function mostrarDetallesPelicula(pelicula) {
        tituloModal.textContent = pelicula.title;
        descripcionModal.textContent = pelicula.overview || "No hay descripción disponible.";
        calificacionModal.textContent = pelicula.vote_average || "Sin calificación.";

        // Mostrar el detalle
        modal.style.display = "block";
    }

    // Evento para cerrar el modal
    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de la ventana modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Validación del formulario
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let isValid = true;

        // Validar nombre
        if (name.value.trim() === "") {
            displayError("name", "El nombre es obligatorio.");
            isValid = false;
        } else {
            clearError("name");
        }

        // Validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            displayError("email", "El correo es obligatorio, ingresa un correo valido.");
            isValid = false;
        } else {
            clearError("email");
        }

        // Validar mensaje
        if (message.value.trim() === "") {
            displayError("message", "El mensaje es obligatorio.");
            isValid = false;
        } else {
            clearError("message");
        }

        if (isValid) {
            alert("¡Gracias por contactarnos! Responderemos a la brevedad.");
            form.reset();
        }
    });

    // Mostrar errores
    function displayError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        errorElement.textContent = message;
    }

    // Limpiar errores
    function clearError(fieldId) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        errorElement.textContent = "";
    }
});

// Función para cargar películas
async function cargarPeliculas() {
    const apiKey = "53470810b320e3a583673bc6f79f0fc8"; 
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const peliculas = datos.results;

        const contenedorPeliculas = document.getElementById("peliculas");
        contenedorPeliculas.innerHTML = "";

        peliculas.forEach(pelicula => {
            const div = document.createElement("div");
            div.classList.add("pelicula");
            div.textContent = pelicula.title;

            // Evento de clic para mostrar detalles de las peliculas: 
            div.addEventListener("click", () => mostrarDetallesPelicula(pelicula));

            contenedorPeliculas.appendChild(div);
        });
    } catch (error) {
        console.error("Error al cargar películas:", error);
    }
}
