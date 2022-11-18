const params = new URLSearchParams(document.location.search);
const id = params.get('id');



async function excluiEvento(){
    const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`)

    const eventos = await response.json();


    let nome = document.querySelector('#nome');
    let banner = document.querySelector('#banner');
    let atracoes = document.querySelector('#atracoes');
    let descricao = document.querySelector('#descricao');
    let data = document.querySelector('#data');
    let lotacao = document.querySelector('#lotacao');
    let btnExcluir = document.querySelector("#btn-excluir");

    
    nome.value = eventos.name;
    banner.value = eventos.poster;
    atracoes.value = eventos.attractions;
    descricao.value = eventos.description;
    data.value = new Date(eventos.scheduled).toDateString();// + ' ' + eventos.scheduled.toLocaleTimeString() ;
    lotacao.value = eventos.number_tickets;

    btnExcluir.addEventListener("click", function(event) {
        event.preventDefault();

        const excluir = confirm("Deseja excluir esse evento permanentemente?")
        if(excluir == true){
            function excluiEvent(){
                let requestOptions = {
                    method: "DELETE",
                    redirect: "follow",
                };
            
                let endpoint = `https://xp41-soundgarden-api.herokuapp.com/events/${id}`;
                fetch(endpoint, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
    
                nome.value = "";
                banner.value = "";
                atracoes.value = "";
                descricao.value = "";
                data.value = "";
               lotacao.value = "";
            }
        }
        
        excluiEvent(); 
       
        
    })
    
}

excluiEvento();
