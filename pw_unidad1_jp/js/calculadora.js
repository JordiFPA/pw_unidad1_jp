const SUMA = '+';
const RESTA = '-';
const MULTIPLICAR = '*';
const DIVIDIR = '/'
function sumar(numero1, numero2) {
    return numero1 + numero2;

}
function restar(numero1, numero2) {
    return numero1 - numero2;

}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;

}
function dividir(numero1, numero2) {
    return numero1 / numero2;

}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;

    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICAR) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVIDIR) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
    console.log(resultado);
    console.log('texto de prueba')
}

const fundamentos = () => {
    console.log('Fundamentos JS');


    /* Arreglos */

    const diasLaborales = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborales);
    console.log(diasLaborales[0]);
    console.log(diasLaborales[10]);

    let valor = '';
    console.log(valor);

    diasLaborales.push('Sabado');
    diasLaborales.unshift('Dias');
    console.log(diasLaborales)

    const numeroImpares = [1, 3, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];

    const numeros = numerosPares.concat(numeroImpares);
    console.log(numeros)

    /* Sentencias de control */

    for (const dia of diasLaborales) {
        console.log(dia)
        if (dia === 'Viernes') {
            console.log('Por fin viernes')

        } else {
            console.log('aun no es viernes');

        }

        if (dia !== 'Viernes') {
            console.log('Dia normal')

        } else {
            console.log('Dia de salida');

        }
    }

    /* manejo de objetos */

    const miProfesor = {
        nombre: 'Jordi',
        apellido: 'Pila',
        edad: '23',
        genero: 'Masculino',
        ciudad: 'Machachi'
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre); 
    /*Seteo de atributos*/ 

    miProfesor.apellido = 'Aguaisa'; 
    console.log(miProfesor); 

    if(miProfesor.ciudad ==='Quito') { 
        console.log('Es de la capital')
    } else { 
        console.log('Pertenece a otra ciudad')
    }
    const estudiante1 ={
        nombre: 'Fatima',
        apellido: 'Fiallos',
        edad: '23'
    }

    const estudiante2 ={
        nombre: 'Bruno',
        apellido: 'Miranda',
        edad: '23'
    }
    const estudiante3 ={
        nombre: 'Henry',
        apellido: 'Asd',
        edad: '23'
    }


    const estudiantes = [estudiante1,estudiante2,estudiante3]; 

    console.table(estudiantes) 



}



