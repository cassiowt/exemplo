var dataHoje = new Date();
meunome = 1000;

function ola() {
    meunome = meunome +  1000;
    alert('Ola vivente ' + meunome + dataHoje);
}

function olaMeunome() {
    meunome = meunome +  " cassio ";
    alert('Ola vivente ' + meunome + dataHoje);
}

/*
function myFunction() {
    document.getElementById("demo").innerHTML="Troca de Paragrafo" + meunome;
}
*/


function calculo() {
    var soma = 2 + 2;
    var subtracao = 2 - 2;
    var divisao = 2 / 2;
    var multiplicacao = 2 * 2;

    alert("A soma é " + soma +
        "\n A subtração é " + subtracao +
        "\n A divisão é " + divisao +
        "\n A multiplicacao é " + multiplicacao)
}

// Exemplos
/*
var numero1 = 23;
var numero2 = 63;
if (numero1 == numero2) {
 alert("Os dois números são iguais")
}
else {
 if (numero1 > numero2) {
 alert("O primeiro número é maior que o segundo")
 }
 else {
 alert("O primeiro número é menor que o segundo")
 }
};

 */

function motos() {

    motos = ["Honda","Yamaha","Kawasaki","Suzuki","Dafra","BMW"];

    listagem = document.getElementById("demo");
    texto = "";
    for ( moto in motos) {
        texto = texto + "Moto numero " + moto + " é " + motos[moto] + "<br>";
    };

    listagem.innerHTML = texto;

}

function mediaAlunos() {

    var notaAlunos = [10, 5, 9, 8, 6, 10, 4.5, 8, 9, 6, 3, 2.5, 1];
    var media = 0;
    var total = 0;

    for( nota in notaAlunos) {
        total = total + notaAlunos[nota];
    }

    media = total / notaAlunos.length;

    document.getElementById("demo").innerHTML = media;

}

function ternario() {
    var ano = document.getElementById("_ano").value;

    var resposta =
        (dataHoje.getFullYear() - parseInt(ano) > 18) ? "Maior Idade" : "Menor Idade";

    document.getElementById("demo").innerHTML = resposta;

}

function idade() {
    var ano = document.getElementById("_ano").value;
    var idade = dataHoje - ano;
    document.getElementById("demo").innerHTML = "Voce tem atualmente " + idade + " anos";
}
function validaSexo() {
    m = document.getElementById("masculino").value;
    f = document.getElementById("feminino").value;

    if ( m = 'on') {
        alert("Masculino");
    } else if ( f = 'on') {
        alert("Feminino");
        } else { alert("Indeciso");
    }
}









