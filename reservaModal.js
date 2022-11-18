var myModal = new bootstrap.Modal(document.querySelector('#MyModal'), {keyboard: false})
const reservebutton = document.querySelector('#reserve')
var eventId = '';

function openModal(id){
     eventId = id;
     myModal.show()
}
console.log(eventId);

reservebutton.onclick = async (evento) => {
    evento.preventDefault();
    id = document.querySelector('#event_id')
    const owner_name = document.querySelector('#owner_name');
    const owner_email = document.querySelector('#owner_email');

    try{

    const raw = {
        "owner_name": owner_name.value,
        "owner_email": owner_email.value,
        "number_tickets": 1,
        "event_id": eventId,
    }


    const postrequest = {
        'method' : 'POST',
        'body' : JSON.stringify(raw),
        'headers': {'Content-type': 'application/json'}
    }

    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/bookings', postrequest)
    response.status == '201'? alert('Ingressos reservados!') : null

    
  
} catch(error) {

    alert('Something went wrong' + error)

  }
}