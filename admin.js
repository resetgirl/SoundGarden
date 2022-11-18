//selecionar a tabela 
const tabela = document.querySelector("#tableEventos");
const tabelaBody = document.querySelector("#table-body");
const botaoEdit = document.querySelector("#edit-event");

console.log(botaoEdit);

async function getEventos(){
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')

    const eventos = await response.json();

   for(let i=0; eventos.length>i;i++){
      /*  let titulo = eventos[i].name;
        let data = eventos[i].scheduled;
        let atracoes = eventos[i].attractions;

    eventos[i].forEach(evento =>{ */

        const eventoTable = `
        <tr>
            <th scope="row">${[i]}</th>
            <td>${new Date(eventos[i].scheduled).toLocaleDateString()} - ${new Date(eventos[i].scheduled).toLocaleTimeString()}</td>
            <td>${eventos[i].name}</td>
            <td>${eventos[i].attractions}</td>
            <td>
                <a href="reservas.html" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${eventos[i]._id}" id= "edit-event" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${eventos[i]._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`

        tabelaBody.innerHTML += eventoTable;
   }     
    
}

getEventos();
