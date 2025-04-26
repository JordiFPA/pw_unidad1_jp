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

    if (miProfesor.ciudad === 'Quito') {
        console.log('Es de la capital')
    } else {
        console.log('Pertenece a otra ciudad')
    }
    const estudiante1 = {
        nombre: 'Fatima',
        apellido: 'Fiallos',
        edad: '23'
    }

    const estudiante2 = {
        nombre: 'Bruno',
        apellido: 'Miranda',
        edad: '23'
    }
    const estudiante3 = {
        nombre: 'Henry',
        apellido: 'Asd',
        edad: '23'
    }


    const estudiantes = [estudiante1, estudiante2, estudiante3];

    console.table(estudiantes)

    /*Referenciar atributo tipo objeto */

    const ciudadano = {
        nombre: 'Jordi',
        apellido: 'Pila',
        direccion: {
            callePrincipal: 'Av. America',
            calleSecundaria: 'Av. La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'Frente al Dilipa'
            }
        }
    }

    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion)
    console.log(ciudadano.direccion.callePrincipal)
    ciudadano.direccion.callePrincipal = 'Av amazonas';
    console.log(ciudadano);

    /* Arreglo de varios estudiantes, pero diferentes, es decir combinando*/

    const est1 = {
        nombre: 'Edison'
    }

    const est2 = {
        nombre: 'Daniel'
    }

    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);

    /*Arreglo de varios estudiantes, en una sola linea*/
    const arregloEstudiantes2 = [{ nombre: 'Carla', apellido: 'Castillos' },
    { nombre: 'Melany', apellido: 'Caizapasto' }]
    console.log(arregloEstudiantes2);

    console.log(arregloEstudiantes2[1].apellido);

    //Desestructuracion de arreglos: 
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);
    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);
    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    console.log(c01);
    console.log(c02);
    desestructuracionArreglo(colores);
    const [, p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);

    //Desestructuracion por operador REST
    console.log('Desestructuracion por operador REST');
    const [p1, ...resto] = desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);



    // Desestructuracion de objetos
    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'Amarillo'
    }


    const { marca, color, anio } = auto;
    console.log(color);

    const { anio1 } = {
        marca1: 'Toyota',
        modelo1: 'prius',
        anio1: 2020,
        color1: 'Amarillo'
    }
    console.log(anio1);

    desestructuracionObjeto(auto);

    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombreR: 'Patricio',
            apellidoR: 'Espinoza',
        }
    }
    //Desestructurar para  llegar al atribto de mi objeto dentro del atributo
    const { rector, nombre } = universidad;
    console.log(rector);
    const { apellidoR } = rector;
    console.log(apellidoR);
    //Desestructuracion en una sola linea de un objeto que tiene atributo de tipo objeto: 

    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Patricio2',
            apellidoR2: 'Espinoza2',
        }
    }
    const { nombre2, rector2: { nombreR2 } } = universidad2;
    console.log(nombreR2)
    console.log('Desestructuracion por operador REST para objetos');
    //Desestructuracion por operador REST para objetos
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }

    const{marcaR,...restoO} = autoR; 

    console.log(marcaR); 
    console.log(restoO); 
}




function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Blanco', 'Rojo', 'Verde', 'Naranja'];
    return colores;
}

function desestructuracionObjeto({ marca, color }) {
    console.log(marca);
    console.log(color);
}











