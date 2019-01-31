

function soma() {

    var v1 = document.getElementById("_number1").value;
    var v2 = document.getElementById("_number2").value;

    var resultado = parseInt(v1) + parseInt(v2);

    document.getElementById("_valorresultado").innerText = resultado;

}
function minus() {

    var v1 = document.getElementById("_number1").value;
    var v2 = document.getElementById("_number2").value;

    var resultado = parseInt(v1) - parseInt(v2);

    document.getElementById("_valorresultado").innerText = resultado;

}
function multi() {

    var v1 = document.getElementById("_number1").value;
    var v2 = document.getElementById("_number2").value;

    var resultado = parseInt(v1) * parseInt(v2);

    document.getElementById("_valorresultado").innerText = resultado;

}
function divid() {

    var v1 = document.getElementById("_number1").value;
    var v2 = document.getElementById("_number2").value;

    var resultado = parseInt(v1) / parseInt(v2);

    document.getElementById("_valorresultado").innerText = resultado;

}