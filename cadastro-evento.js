//Selecionar elementos
let btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", function (event) {
     event.preventDefault();

     let formCadastro = document.querySelector("#cadastro");
     let name = formCadastro.nome.value;
     let atracoes = formCadastro.atracoes.value;
     let descricao = formCadastro.descricao.value;
     let data = formCadastro.data.value;
     let lotacao = formCadastro.lotacao.value;

     
     let attractions = atracoes.split(",");

     let raw = {
          "name": name,
          "poster": "link da imagem",
          "attractions": attractions,
          "description": descricao,
          "scheduled": data,
          "number_tickets": lotacao,
        };


function postEvent(){
    let requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(raw),
        redirect: "follow",
    };

    let endpoint = 'https://xp41-soundgarden-api.herokuapp.com/events';
    fetch(endpoint, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    alert("Seu evento foi cadastrado com sucesso!");

    document.querySelector("#nome").value = "";
    document.querySelector("#atracoes").value = "";
    document.querySelector("#descricao").value = "";
    document.querySelector("#data").value = "";
    document.querySelector("#lotacao").value = "";
    
}

postEvent();


});




