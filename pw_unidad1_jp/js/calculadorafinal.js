let num1 = 0; 
let num2 = 0; 
let esSegundoDigito = 0;

function mostrarEnDisplay(valor) {  
    let elementoDisplay = document.getElementById('id_display') 
    elementoDisplay.innerText = elementoDisplay.innerText + valor; 
} 

function contenar (digito) { 
    if(digito !== '+') { 
       concatenarNumero(); 
    } else { 
       operacionSumer(); 
    } 
} 
function OperacionSumar() { 
   esSegundoDigito = "1"
}
function sumar(){ 
    let numPrimero = parseFloat(num1); 
    let numSegundo = parseFloat(num2); 
    let elementoDisplay = document.getElementById('id_display'); 
    elementoDisplay.innerText =num1+num2;
 
}
function concatenarNumero(numero) { 
    if(esSegundoDigito === "0"){ 
        num1 = num1 + num2 ;
    } else { 
        num2 = num2+numero;
    }
}