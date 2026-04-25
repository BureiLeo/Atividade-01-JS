const adicionar = document.querySelector('#btnAdicionar');
const input = document.querySelector('#itemInput');
const lista = document.querySelector('#listaItens');


adicionar.addEventListener('click', function() {
    const item = input.value.trim();
    if (item) {
        const li = document.createElement('li');
        li.className = 'lista';
        li.textContent = item;
        
        const btnConcluir = document.createElement('button');
        btnConcluir.className = 'btnConcluir';
        btnConcluir.textContent = 'Concluir';
        btnConcluir.addEventListener('click', function() {
            li.style.textDecoration = 'underline';
            li.style.color = 'green';
        });
        
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btnRemover';
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            lista.removeChild(li);
        });
        
        li.appendChild(btnConcluir);
        li.appendChild(btnRemover);
        lista.appendChild(li);
        input.value = '';
    }
});