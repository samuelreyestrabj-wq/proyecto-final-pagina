function cargarPagina(pagina) {
    fetch('pages/' + pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
            localStorage.setItem("paginaActual", pagina);
        })
        .catch(error => {
            document.getElementById('contenido').innerHTML =
                "<p>Error cargando el contenido</p>";
            console.error(error);
        });
}

document.addEventListener("DOMContentLoaded", function () {

    const paginaGuardada = localStorage.getItem("paginaActual");

    if (paginaGuardada) {
        cargarPagina(paginaGuardada);
    } else {
        cargarPagina("home.html");
    }

});