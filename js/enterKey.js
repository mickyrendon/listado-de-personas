// tecla enter dinamica
nombre.addEventListener('keydown', enter, true);
apellido.addEventListener('keydown', enter, true);

function enter(event){
    let key = event.wich || event.keyCode;

    if(key === 13){
        // pattern();
        validator();
        cleaning();
        autoFocus();
        console.log(`tecla enter activada`);
    };
}

