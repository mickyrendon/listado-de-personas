const alfa   = new RegExp('^[A-Z]+$', 'i');
var isValid = false;
const btn = document.getElementById('btn');
      btn.addEventListener('click', validator, true);

// campos de texto
let nombre   = document.getElementById('input1');
let apellido = document.getElementById('input2'); 



function validator(){

    // validador de campo vacio
    if(nombre.value === '' || apellido.value === ''){
        isValid = false;
        console.log('validacion 1 no aprobada');
        alert('ingrese nombre y apellido sin acentos')
    }else{
        if(!alfa.test(nombre.value) || !alfa.test(apellido.value)){
            isValid = false;
            console.log('validacion 2 no aprobada');
            alert('ingrese solo letras');
        }else{
            console.log('todas las validaciones aprobadas');
            isValid = true;

            addPersona();
        }
    }
    
}

function addPersona(){
    // let nameUpp = nombre.value[0].toUpperCase + nombre.value.slice(1);
    // let lastNameUpp = apellido.value[0].toUpperCase + apellido.value.slice(1);
    let nameUpp = nombre.value.replace(/\b\w/g, l => l.toUpperCase());
    let lastNameUpp = apellido.value.replace(/\b\w/g, l => l.toUpperCase());
    const newPersona = new Persona(nameUpp, lastNameUpp);
    personas.push(newPersona);
    renderizar();
    cleaning();
}