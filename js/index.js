

/*
* @author Cássio Trindade
* Exemplo de comentario de várias linhas
*
*/

function exemplo(){
    const NOME = "DESSA FUÇÃO"
    let parcela1 = 23;
    let parcela2 = 33;
    let soma = parcela1 + parcela2;
    console.log(soma);


}

var exibeMensagem = function() {
    mensagem = "MANTRA";
    console.log(mensagem);
    var mensagem;
}



var exibeMensagem1 = function() {
    var mensagemForaDoIf = "MANTRA";
    if(mensagemForaDoIf == "MANTRA") {
        var mensagemDentroDoIf = "JavaScript";
    }
    console.log(mensagemForaDoIf); // MATERA
    console.log(mensagemDentroDoIf); // JavaScript
}

var exibeMensagem2 = function() {
    var mensagemForaDoIf = "MANTRA";
    if(mensagemForaDoIf == "MANTRA") {
        let mensagemDentroDoIf  = "JavaScript";
        console.log(mensagemDentroDoIf); // imprime JS
    }
    // mensagemDentroDoIf não é mais acessível a partir deste ponto
    console.log(mensagemForaDoIf); // imprime MATERA

    // apenas mensagemForaDoIf existe nesse ponto
}

function salva() {
    alert("Animal Salvo")
}


// Comentário de uma linha em cima de uma function
function soma() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;
    alert(parseInt(numeroUm) + parseInt(numeroDois));
}

