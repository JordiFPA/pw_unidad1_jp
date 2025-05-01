function guardar() { 
    validar(); 

}

function validar() {
    let nombre = document.getElementById('id_nombre').value; 
    if(nombre === ''){
        console.log('ERROR NO HA INGRESADO EL NOMBRE')
    }else{
        console.log('Paso validacion del nombre')
    }

}