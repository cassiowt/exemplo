
function myFunction( ) {
    var x = document.getElementsByClassName("destaque");

    x[1].innerHTML = x[2].innerHTML;
}

function CriarParagrafo() {
    var objNovoParagrafo = document.createElement('div');
    var strTexto = document.createTextNode('Informação do parágrafo.');
     objNovoParagrafo.appendChild(strTexto);
    document.getElementById('pindice').appendChild(objNovoParagrafo);
}

function Conteudo() {
    var objTag = document.getElementById('pindice');
    window.alert(objTag.innerHTML);
}

function Inserir(objeto) {
    var objNovoParagrafo = document.createElement('p');
    var strTexto = document.createTextNode('Conteudo criado!');
    objNovoParagrafo.appendChild(strTexto);
    objeto.parentNode.insertBefore(objNovoParagrafo, objeto);
}