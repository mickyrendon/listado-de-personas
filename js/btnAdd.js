const alfa   = new RegExp('^[A-Z]+$', 'i');
var isValid = false;
const btn = document.getElementById('btn');
      btn.addEventListener('click', validator, true);

      // campos de texto
let nombre   = document.getElementById('input1');
let apellido = document.getElementById('input2'); 

// guardar lista en localStorage

function validator(){
    
    // validador de campo vacio
    if(nombre.value === '' || apellido.value === ''){
        isValid = false;
        console.log('validacion 1 no aprobada');
        alert('ingrese nombre y apellido sin acentos');
        autoFocus();
    }else{
        if(!alfa.test(nombre.value) || !alfa.test(apellido.value)){
            isValid = false;
            console.log('validacion 2 no aprobada');
            alert('ingrese solo letras');
            autoFocus();
        }else{
            console.log('todas las validaciones aprobadas');
            isValid = true;
            
            addPersona();
        }
    }
    
}

// array para guardar los datos del ls y luego renderizarlos
const storageArray = [];

function addPersona(){
    // mayuscula a la primera letra
    let nameUpp = nombre.value.replace(/\b\w/g, l => l.toUpperCase());
    let lastNameUpp = apellido.value.replace(/\b\w/g, l => l.toUpperCase());
    
    let fullName;
    
    // adding new person
    const newPersona = new Persona(nameUpp, lastNameUpp);
    personas.push(newPersona);
    fullName = `${nameUpp} ${lastNameUpp}`;
    storageArray.push(fullName);

// EN PROCESO
    if(fullName){
        console.log('if del fullname para localstorage');

        cache(storageArray);

        console.log(localStorage);
    }
    renderizar();
    cleaning();
    autoFocus();
};