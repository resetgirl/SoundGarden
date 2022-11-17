const params = new URLSearchParams(document.location.search);
const id = params.get('id');



async function editEvento(){
    const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`)

    const eventos = await response.json();


    let nome = document.querySelector('#nome');
    let banner = document.querySelector('#banner');
    let atracoes = document.querySelector('#atracoes');
    let descricao = document.querySelector('#descricao');
    let data = document.querySelector('#data');
    let lotacao = document.querySelector('#lotacao');
    let btnEdit = document.querySelector('#btn-edit');

    
    nome.value = eventos.name;
    atracoes.value = eventos.attractions;
    descricao.value = eventos.description;
    data.value = new Date(eventos.scheduled).toDateString();// + ' ' + eventos.scheduled.toLocaleTimeString() ;
    lotacao.value = eventos.number_tickets;

    btnEdit.addEventListener("click", function (event) {
        event.preventDefault();

        let formCadastro = document.querySelector("#cadastro");
        let nameEdit = formCadastro.nome.value;
        let atracoesEdit = formCadastro.atracoes.value;
        let descricaoEdit = formCadastro.descricao.value;
        let dataEdit = formCadastro.data.value;
        let lotacaoEdit = formCadastro.lotacao.value;



        let raw = {
            "name": nameEdit,
            "poster": "link da imagem",
            "attractions": atracoesEdit.split(","),
            "description": descricaoEdit,
            "scheduled": new Date(dataEdit),
            "number_tickets": lotacaoEdit,
          };
          

        function editEvent(){
            let requestOptions = {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(raw),
                redirect: "follow",
            };
        
            let endpoint = `https://xp41-soundgarden-api.herokuapp.com/events/${id}`;
            fetch(endpoint, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        
            alert("Seu evento foi editado com sucesso!");

            nome.value = "";
            banner.value = "";
            atracoes.value = "";
            descricao.value = "";
            data.value = "";
            lotacao.value = "";
            
            
    
        }
         
        editEvent();
        
    })
    
}

editEvento();