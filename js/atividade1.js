const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#botaoAlterar');

botao.addEventListener('click', function() {
    if (titulo.innerText === 'CS 1.6 é o melhor!') {
        titulo.innerText = 'o Alex gosta de Peru!';
    } else {
        titulo.innerText = 'CS 1.6 é o melhor!';
    }
});