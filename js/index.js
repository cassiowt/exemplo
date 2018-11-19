

/*
* @author Cássio Trindade
* Exemplo de comentario de várias linhas
*
*/



function exemplo(){
    var  DiaSemana = new Date( );
    DiaSemana = 6;

    switch (DiaSemana) {
        case 0: alert(" Segunda-feira ") ;
            break ;
        case 2: alert(" Terça-feira ") ;
            break ;
        case 3: alert(" Quarta-feira ") ;
            break ;
        case 4: alert(" Quinta-feira ") ;
            break;
        case 5: alert(" Sexta-feira ");
            break ;
        case 6:
        case 7: alert(" Fim de semana ");
            break ;
        default: alert(" Dia inexistente ");
    }


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

