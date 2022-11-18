//selecionar a tabela 
const tabelaBody = document.querySelector("#tableReservas");
const urlNumaString = window.location.search; // pega o link da pagina como uma string
const urlParams = new URLSearchParams(urlNumaString); // URLSEARCHPARAMS é uma pacote que da pra pegar parametros da url
const id = urlParams.get('id') //nesse caso vc escolhe o id


async function getReservas(id){
    const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`)

    const reservas = await response.json();

    console.log(reservas)

   for(let i=0; reservas.length>i;i++){
      

        const eventoTable = `
        <tr>
            <th scope="row">${[i]}</th>
            <td>${reservas[i].owner_name}</td>
            <td>${reservas[i].owner_email}</td>
            <td>${reservas[i].number_tickets}</td>
        </tr>`

        tabelaBody.innerHTML += eventoTable;
    }

      
    
}

getReservas(id);
