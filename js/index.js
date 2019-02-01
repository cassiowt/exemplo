/*
* @author Cássio Trindade
* Exemplo de comentario de várias linhas
*
*/

function trocarImagens(ele) {
    console.log(ele);
    var novaImage = document.getElementsByName("image")
    var novoTitulo = document.getElementsByTagName("h2")

    for (key in novaImage) {
       novaImage[key].src = "https://i0.wp.com/www.amplino.org/wp-content/uploads/2018/08/imagens-de-gatos.jpg?resize=640%2C461&ssl=1";
       novoTitulo[key].innerHTML = "Gatos"
    };
}

function CriarParagrafo() {
    var objNovoParagrafo = document.createElement('p');
    var strTexto = document.createTextNode('Informação do parágrafo.');
    objNovoParagrafo.appendChild(strTexto);
    document.getElementById('pindice').appendChild(objNovoParagrafo);
}

function Inserir(objeto) {
    var objNovoParagrafo = document.createElement('p');
    var strTexto = document.createTextNode('Conteudo criado!');
    objNovoParagrafo.appendChild(strTexto);
    objeto.parentNode.insertBefore(objNovoParagrafo, objeto);
    objNovoParagrafo.onclick = function () { this.parentNode.removeChild(this); };
}


function RemoverParagrafo(p) {
    var objParagrafo = document.getElementsByName(p);
    objParagrafo.removeChild(strTexto);

}

function carregaImagens() {
    var imagens = new Array("img1","img2","img3","img4","img5","img6");

    for (key in imagens) {
        var numero = parseInt(key) + parseInt(1);
        var ele = "img" + numero;
        document.getElementById(ele).src = "../images/"+imagens[key]+".jpg";
        document.getElementById(ele).style.width = "100px";
        document.getElementById(ele).style.height = "100px";
    }
}

function ExibirForm() {

    var objDiv = document.getElementById('formlogin').style.visibility;

    if (objDiv == 'visible')
        document.getElementById('formlogin').style.visibility = 'hidden';
    else
        document.getElementById('formlogin').style.visibility = 'visible';


}

function Destacar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,0)';
}
function Restaurar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,255)';
}


function quebra() {

    var _NumInt = "Tecnologia Software Livre";
    var _VetOUT = _NumInt.split(" ");
    document.getElementById("exemplo").innerHTML = "O TERCEIRO  elemento presente no _VetOUT: " + _VetOUT[2];

}
function exemploDatas() {
    var data = new Date();
    var dataCompleta = data.toLocaleString();

    document.getElementById("footer").innerHTML = dataCompleta;

    document.getElementById("footer").style.backgroundColor = "#000000"
    document.getElementById("footer").style.color = "#fafafa"

}

function foo() {
    var _sexo = "M";
    if (_sexo == "M") {
        alert("Masculino")
    } else {
        alert("Feminino")
    }
};

function media() {
    var notas = new Array(1, 9, 9, 9, 9, 9, 9, 9, 9, 10)
    var media = 0;
    for (var key in notas) {
        var numeroAluno = parseInt(key) + 1;
        document.write("<h3> a nota do aluno " + numeroAluno + " é " + notas[key] + "</h3>")
        media += notas[key];
    }
    document.write("<h2> A média dos alunos é " + media / notas.length + "</h2>")
};


function mediaSimples() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;

    var media = (parseInt(valor1) + parseInt(valor2)) / 2;
    document.getElementById("resultado").innerText = "O resultado da média é:  " + media;

    document.getElementById("boxResultado").style.backgroundColor = '#0f7a80'
    document.getElementById("boxResultado").style.color = '#faedf1'
    document.getElementById("boxReultado").style.padding = "5px";

}


function exemplo() {
    var data = new Date().toLocaleString();

    document.getElementById("titulo").innerHTML = data;

    var now = moment();

    document.getElementById("dataMoment").innerHTML = now;


}

function exemplo1() {
    var DiaSemana = new Date();
    DiaSemana = 6;

    switch (DiaSemana) {
        case 0:
            alert(" Segunda-feira ");
            break;
        case 2:
            alert(" Terça-feira ");
            break;
        case 3:
            alert(" Quarta-feira ");
            break;
        case 4:
            alert(" Quinta-feira ");
            break;
        case 5:
            alert(" Sexta-feira ");
            break;
        case 6:
        case 7:
            alert(" Fim de semana ");
            break;
        default:
            alert(" Dia inexistente ");
    }


}

var exibeMensagem = function () {
    mensagem = "MANTRA";
    console.log(mensagem);
    var mensagem;
}


var exibeMensagem1 = function () {
    var mensagemForaDoIf = "MANTRA";
    if (mensagemForaDoIf == "MANTRA") {
        var mensagemDentroDoIf = "JavaScript";
    }
    console.log(mensagemForaDoIf); // MATERA
    console.log(mensagemDentroDoIf); // JavaScript
}

var exibeMensagem2 = function () {
    var mensagemForaDoIf = "MANTRA";
    if (mensagemForaDoIf == "MANTRA") {
        let mensagemDentroDoIf = "JavaScript";
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
    var numeroDois = document.getElementById("valor-dois").value;
    alert(parseInt(numeroUm) + parseInt(numeroDois));
}

function montaArrys() {
    var Animal = {especie: "Gato", idade: 10, apelido: "Jj"};
    var Animal1 = {especie: "Cao", idade: 12, apelido: "Rex"};
    var AnimaisVips = ["Byte", "Hantaro", "Pipa", "Boyw"];
    var Animais = new Array();

    Animais[0] = Animal;
    Animais[1] = Animal1;
    Animais[2] = AnimaisVips;


    console.log(Animais);

    var ultimoelemento = AnimaisVips.length - 1;
    console.log(Animais[2][ultimoelemento])

    AnimaisVips.push("Baby");

    var ultimoelemento = AnimaisVips.length - 1;
    console.log(Animais[2][ultimoelemento])

    console.log(AnimaisVips.reverse())


    var dataHoje = new Date();

    console.log(dataHoje)
    console.log(dataHoje.getDay())
    console.log(dataHoje.getHours())
    console.log(dataHoje.getUTCDate())
    console.log(dataHoje.getMonth())
    console.log(dataHoje.getFullYear())

    /* for(a in Animais) {
         for (propriedade in Animal)
         alert(Animais[a][propriedade])
     };*/
}

function Destacar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,0)';
    campo.style.borderWidth = '5px';
}
function Restaurar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,255)';
}


function loadImagens() {
    var texto = "";
    var imagens = new Array();

    imagens = ["../images/img1.jpg","../images/img2.jpg","../images/img3.jpg",
        "../images/img4.jpg","../images/img5.jpg", "../images/img6.jpg"]


    for (img in imagens){
        texto = texto + "<img name='foto' id='" + img + "' width=\"50px\" src=\""+ imagens[img]  +"\"><br>"
    }


    document.getElementById("_imagens").innerHTML = texto;
}

function mudaImage() {

    listaDeImagens = document.getElementsByTagName("img");
    temporaria = listaDeImagens[0].src;
    listaDeImagens[0].src = listaDeImagens[1].src
    listaDeImagens[1].src = temporaria

}


function montaSaida() {

    var genero = document.getElementById("_Genero").value;
    var nome = document.getElementById("_Nome").value;
    var ano = document.getElementById("_Data").value;
    var email = document.getElementById("_Email").value;

    var texto = "O filme escolido para o meu amigo " + email +
     " foi o " + nome + " do genero " + genero + ", ele foi feito em " +
     ano;

    document.getElementById("indicacao").innerHTML = genero;
    document.getElementById("amigo").innerHTML = texto;







}