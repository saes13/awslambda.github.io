let reservas = [];

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const fechaHora = document.getElementById('fechaHora').value;
    const laboratory = document.getElementById('laboratory').value;

    const reserva = {
        id,
        email,
        name,
        fechaHora,
        laboratory
    };

    reservas.push(reserva);

    const listaReservas = document.getElementById('reservas');
    const li = document.createElement('li');
    li.textContent = JSON.stringify(reserva);
    listaReservas.appendChild(li);
});