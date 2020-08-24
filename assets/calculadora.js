function init(){
}

//Variables para los números
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");

//Variables para elegir operaciones
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var reset = document.getElementById("reset");
var resultado = document.getElementById('resultado');

//variables para ejecutar operaciones
var numero1 = "";
var numero2 = ""; 
var operador = ""; 
var resultadoFinal = "";

//Para las teclas presionadas numeros y letra C
cero.onclick = function(e){
    resultado.textContent += "0";
}
uno.onclick = function(e){
    resultado.textContent += "1";
}
dos.onclick = function(e){
    resultado.textContent += "2";
}
tres.onclick = function(e){
    resultado.textContent += "3";
}
cuatro.onclick = function(e){
    resultado.textContent += "4";
}
cinco.onclick = function(e){
    resultado.textContent += "5";
}
seis.onclick = function(e){
    resultado.textContent += "6";
}
siete.onclick = function(e){
    resultado.textContent += "7";
}
ocho.onclick = function(e){
    resultado.textContent += "8";
}
nueve.onclick = function(e){
    resultado.textContent += "9";
}
reset.onclick = function(e) {
    resetVar();
} 


//funciones para los operadores
suma.onclick = function(e){
    numero1 = resultado.textContent;
    operador = "+";
    resultado.textContent = "";
}
resta.onclick = function(e){
    numero1 = resultado.textContent;
    operador = "-";
    resultado.textContent = "";
}
multiplicacion.onclick = function(e){
    numero1 = resultado.textContent;
    operador = "*";
    resultado.textContent = "";
}
division.onclick = function(e){
    numero1 = resultado.textContent;
    operador = "/";
    resultado.textContent = "";
}

//Función reset variables 
function resetVar(){
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
}

// Para mostrar la solución al poner igual
igual.onclick = function(e){
    numero2 = resultado.textContent;
    resulOperacion();
}

//funcion resultado operación
function resulOperacion(){
    var resultadoFinal = 0;
    switch(operador){
      case "+":
        resultadoFinal = parseFloat(numero1) + parseFloat(numero2);
        break;
      case "-":
        resultadoFinal = parseFloat(numero1) - parseFloat(numero2);
          break;
      case "*":
        resultadoFinal = parseFloat(numero1) * parseFloat(numero2);
        break;
      case "/":
        resultadoFinal= parseFloat(numero1) / parseFloat(numero2);
        break;
      default:
        break;
    }
    resetVar();
    resultado.textContent = resultadoFinal;
}