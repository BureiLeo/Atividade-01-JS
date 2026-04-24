const paragrafo = document.querySelector('#paragrafo');
const botaocor = document.querySelector('#btnCor');
const botaofundo = document.querySelector('#btnFundo');
const botaotema = document.querySelector('#btnTema');


botaocor.addEventListener('click', function() {
    paragrafo.style.color = 'blue';
});

botaofundo.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});

botaotema.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});