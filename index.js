
// fazer o banner rotativo

let bannerRotativo = document.getElementById('#banner_rotativo');
let imgBanner = document.getElementById('#img_banner')

function slide1(){
    document.getElementById('img_banner').src="./img/show1.jpg";
    setTimeout("slide2()", 2000)
    }
    
    function slide2(){
    document.getElementById('img_banner').src="./img/show2.jpg";
    setTimeout("slide3()", 2000)
    }
    
    function slide3(){
    document.getElementById('img_banner').src="./img/show3.jpg";
    setTimeout("slide1()", 2000)
    }



// Mostrando os eventos na tela

const EventoCaixa = document.querySelector("#caixa_evento");

async function getEventos() {
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')

    const eventos = await response.json();

    for (let i = 0; 3 > i; i++) {

        const eventoTable = `
        <article class="evento card p-5 m-3">
            <h2>${eventos[i].name}</h2>
            <h4>${eventos[i].attractions}</h4>
            <p>${eventos[i].description}</p>
            <a class="btn btn-primary" onclick="openModal('${eventos[i]._id}')">reservar ingresso</a>
        </article>`

        EventoCaixa.innerHTML += eventoTable;
    }

}

getEventos();