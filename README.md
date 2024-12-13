# Java Script 3F

Explora el Cine
Explora el Cine es una página web interactiva que permite a los usuarios explorar películas populares, ver detalles sobre cada película y contactar con los administradores del sitio a través de un formulario. Utiliza una API de TheMovieDB para cargar información sobre las películas.

Descripción
La página principal muestra una lista de películas populares con su título, poster y calificación. Al hacer clic en una película, los usuarios pueden ver más detalles, como una descripción de la película y su calificación. Además, el sitio incluye un formulario de contacto para que los usuarios puedan enviar mensajes.

Estructura del Proyecto
El proyecto se compone de tres archivos principales:

HTML (index.html): Estructura principal de la página.
CSS (style.css): Estilos y diseño visual de la página.
JavaScript (app.js): Funcionalidad para cargar películas desde la API, mostrar detalles en un modal, y validar el formulario de contacto.

Funcionalidades
Cargar películas populares: Al hacer clic en el botón "Cargar Películas", se hace una solicitud a la API de TheMovieDB para obtener una lista de películas populares y se muestran en el sitio.
Ver detalles de una película: Al hacer clic en una película, se abre un modal que muestra el título, la descripción y la calificación.
Formulario de contacto: El formulario permite a los usuarios enviar su nombre, correo electrónico, película favorita y mensaje. Se realiza una validación para asegurarse de que los campos estén completos, excepto pelicula favorita que es un campo opcional, y el correo electrónico sea válido.
 
