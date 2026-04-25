// Elementos do DOM
const btnAdicionar = document.querySelector('#btnAdicionar');
const tarefaInput = document.querySelector('#tarefaInput');
const listaTarefas = document.querySelector('#listaTarefas');

// Array para armazenar as tarefas
let tarefas = [];

// Carregar tarefas do localStorage ao iniciar
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        renderizarTarefas();
    }
}

// Salvar tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Adicionar nova tarefa
function adicionarTarefa() {
    const textoTarefa = tarefaInput.value.trim();
    
    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    const novaTarefa = {
        id: Date.now(),
        texto: textoTarefa,
        concluida: false
    };
    
    tarefas.push(novaTarefa);
    salvarTarefas();
    renderizarTarefas();
    tarefaInput.value = '';
}

// Remover tarefa
function removerTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    salvarTarefas();
    renderizarTarefas();
}

// Marcar/desmarcar tarefa como concluída
function toggleConcluir(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        salvarTarefas();
        renderizarTarefas();
    }
}

// Renderizar todas as tarefas na tela
function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    
    if (tarefas.length === 0) {
        listaTarefas.innerHTML = '<p>Nenhuma tarefa adicionada ainda.</p>';
        return;
    }
    
    tarefas.forEach(tarefa => {
        const divTarefa = document.createElement('div');
        divTarefa.className = 'tarefa-item';
        
        const spanTexto = document.createElement('span');
        spanTexto.className = 'tarefa-texto';
        spanTexto.textContent = tarefa.texto;
        
        if (tarefa.concluida) {
            spanTexto.classList.add('tarefa-concluida');
        }
        
        const divBotoes = document.createElement('div');
        divBotoes.className = 'btn-grupo';
        
        const btnConcluir = document.createElement('button');
        btnConcluir.className = 'btn-concluir';
        btnConcluir.textContent = tarefa.concluida ? 'Desfazer' : 'Concluir';
        btnConcluir.addEventListener('click', () => toggleConcluir(tarefa.id));
        
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn-remover';
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => removerTarefa(tarefa.id));
        
        divBotoes.appendChild(btnConcluir);
        divBotoes.appendChild(btnRemover);
        
        divTarefa.appendChild(spanTexto);
        divTarefa.appendChild(divBotoes);
        
        listaTarefas.appendChild(divTarefa);
    });
}

// Event Listeners
btnAdicionar.addEventListener('click', adicionarTarefa);

tarefaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Carregar tarefas ao iniciar a página
carregarTarefas();