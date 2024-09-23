let cantidad_min_caracteres = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadena_caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()abcdefghijklmnopqrstuvwxyz0123456789';


function generar(){
    let numero_digitado = parseInt(cantidad_min_caracteres.value);
    if (numero_digitado > 8){
        let pass='';
        for (let i=0; i < numero_digitado; i++) {
            let caracterAleatorio = cadena_caracteres[Math.floor(Math.random() * cadena_caracteres.length)];
            pass+=caracterAleatorio;
        }
        contrasena.value=pass;
        alert("Su nivel de contraseña es: "+nivel_pass(pass));
    }
    else
    {
        alert("Cantidad de caracteres insuficientes, debe ser mayor a 8");
        limpiar();
    }
}

function limpiar(){
    cantidad_min_caracteres.value='';
    contrasena.value='';
}

function nivel_pass(pass){
    let nivel = 0;

    if (pass.match(/[a-z]/)){
        nivel += 1;
    }
    if (pass.match(/[A-Z]/)){
        nivel += 1;
    }
    if (pass.match(/[!-)]/)){
        nivel += 1;
    }
    if (pass.match(/[0-9]/)){
        nivel += 1;
    }
    
    if (nivel < 2) {
        return ("Fácil");
    } else if (nivel == 2) {
        return ("Medio");
    } else if (nivel == 3) {
        return ("Dificil");
    } else {
        return ("Muy dificil");
    }

}




