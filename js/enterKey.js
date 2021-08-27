// tecla enter dinamica
nombre.addEventListener('keydown', enter, true);
apellido.addEventListener('keydown', enter, true);

function enter(event){
    let key = event.wich || event.keyCode;

    if(key === 13){
        // pattern();
        validator();
        cleaning();
        console.log(`tecla enter activada`);
    }

    // console.log(`imprimiendo tecla: ${key}`);
}

function autoFocus(){
    // if(nombre.autofocus){
        nombre.autofocus = true;
        console.log(nombre.autofocus);
    // }else{
    //     nombre.autoFocus = true;
    //     console.log('autofocus');
    // }
}