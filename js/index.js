

/*
* @author Cássio Trindade
* Exemplo de comentario de várias linhas
*
*/
function foo() {
    var _sexo = "M";
    if (_sexo == "M") {
        alert("Masculino")
    } else {
        alert("Feminino")
    }
};

function media() {

    var notas = new Array( 1, 9, 9, 9, 9, 9, 9, 9, 9, 10)
    var media = 0;
    for (var key in notas) {
         var numeroAluno = parseInt(key) + 1;
         document.write("<h3> a nota do aluno " +   numeroAluno  + " é " + notas[key] + "</h3>")
         media += notas[key];
    }

    document.write("<h2> A média dos alunos é " + media / notas.length + "</h2>")

};



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

