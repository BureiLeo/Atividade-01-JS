const adicionar = document.querySelector('#btnAdicionar');
const input = document.querySelector('#itemInput');
const lista = document.querySelector('#listaItens');


adicionar.addEventListener('click', function() {
    const item = input.value.trim();
    if (item) {
        const li = document.createElement('li');
        li.className = 'lista';
        li.textContent = item;
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btnRemover';
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            lista.removeChild(li);
        });
        li.appendChild(btnRemover);
        lista.appendChild(li);
        input.value = '';
    }
});