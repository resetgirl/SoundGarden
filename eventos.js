
const listaEventos = document.querySelector("#lista_eventos");

async function getEventos() {
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')

    const eventos = await response.json();

    for (let i = 0; eventos.length > i; i++) {

        const eventoTable = `
        <article class="evento card p-5 m-3">
            <h2>${eventos[i].name}</h2>
            <h4>${eventos[i].attractions}</h4>
            <p>${eventos[i].description}</p>
            <a href="reservas.html?id=${eventos[i]._id}" class="btn btn-primary">reservar ingresso</a>
        </article>`

        listaEventos.innerHTML += eventoTable;
    }
}

getEventos();