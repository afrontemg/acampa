const formulario = document.querySelector('form');
const confirmacoes = document.getElementById('confirmacao');

function enviadoSucesso() {
    formulario.style.display = 'none';
    confirmacoes.style.display = 'block';
}

const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=name]').value;
    const whatsapp = document.querySelector('input[name=whatsapp]').value;
    const cidade = document.querySelector('input[name=cidade]').value;
    const universidade = document.querySelector('input[name=universidade]').value;
    const curso = document.querySelector('input[name=curso]').value;
    const afronte = document.querySelector('input[name=afronte]').value;

    fetch('https://api.sheetmonkey.io/form/gmJqjW81TvgWjgQVh4Dmno', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, whatsapp, cidade, universidade, curso, afronte}),
    });

    enviadoSucesso();
}



formulario.addEventListener('submit', handleSubmit);
