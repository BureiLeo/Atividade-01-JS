const adicionar = document.querySelector('#btnAdicionar');
const input = document.querySelector('#itemInput');
const lista = document.querySelector('#listaItens');


adicionar.addEventListener('click', function() {
    const item = input.value.trim();
    if (item) {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
        input.value = '';
    }
});