import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');

const todayFormatted = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = todayFormatted;
selectedDate.min = todayFormatted;

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();

        if(!name) {
            return alert('Informe o nome do cliente!')
        }

        const hourSelected = document.querySelector(".hour-selected");

        if(!hourSelected) {
            return alert('Selecione o horario');
        }

        const [hour] = hourSelected.innerText.split(':');

        const when = dayjs(selectedDate.value).add(hour, 'hour');

        const id = new Date().getTime();

        console.log({
            id,
            name,
            when
        })
    } catch (error) {
        console.error(error);
        alert('Não foi possível realizar o agendamento')
    }
}
