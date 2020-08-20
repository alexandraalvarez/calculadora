function init(){

}

//variable tecla presionada para saber si es un número o no
//necesito una variable para guardar los numeros tecleados hasta antes de poner un operador, validar que sea numero
//necesito otra variable para guardar el operador, validar que sea símbolo
//otra variable para el otro numero
//variable de resultado temporal
//variable resultado definitivo
//funciones para cada símbolo (suma, resta, multiplicacion, division, igual, limpiar "C")

var teclaClick = "";
var numero1 = "";
var numero2 = ""; 
var operador = ""; 
var acumulador = 0; 
var resultadoFinal = "";

//Función para filtrar todas las teclas y definir si son numero o simbolo
function getSymbol() {
    
}

//Función suma 
function suma(){

   var sumaResult = numero1 + numero2;
   return acumulador = sumaResult;
}

//Funcion resta
function resta(){

    var restaResult = numero1 - numero2;
    return acumulador = restaResult;
}

//Función multiplicación
function multiplica(){

    var multiplicaResult = numero1 * numero2;
    return acumulador = multiplicaResult;
}

//Función división
function divide(){

    var divideResult = numero1 / numero2;
    return acumulador = divideResult;
}

//Función reset variables ******** falta agregar que la pantalla no muestre nada
function resetVar(){
    
    acumulador = 0;
    resultadoFinal = 0;
    numero1 = "";
    numero2 = "";
    operador = "";
}

//Función para obtener signos presionados
switch (operador) {
    case "+":
        suma(numero1, numero2);
        break;    

    case "-":
        resta(numero1,numero2);
        break;

    case "*":
        multiplica(numero1,numero2);    
        break;

    case "/":
        multiplica(numero1,numero2);
        break;
        
    case "C":
        resetVar();
        break;

    case "=":
        resultadoFinal = acumulador;
        document.getElementById("resultado").innerHTML = resultadoFinal;  
}

//Si la tecla presionada es un numero, ejecuta get number, si no es un numero, ejecuta el switch
if (document.getElementById())

//Función para obtener valores números presionados
function getNumber() {
    numero1 = document.getElementById("uno").value;  
    
}

//Función para mostrar el resultado en la pantalla
function showResult() {
    document.getElementById("resultado").innerHTML = resultadoFinal;
}