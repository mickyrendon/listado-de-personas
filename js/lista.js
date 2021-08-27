// renderizando
document.body.onload = renderizar;

// array de personas para uso global
const personas = [];  

// funcion renderizar 
function renderizar(){
    let text = '';

    if(localStorage.length == 0){
        console.log("storage vacio");
    }else{
        console.log('storage lleno');
        // let localSList = JSON.stringify(localStorage.getItem());
        // Object.keys(localStorage).forEach(function(key){

        //     const lsKeys = localStorage.getItem(key);
        //     text += `<li>${lsKeys}</li>`;

        //  });
       
    }

    console.log(`renderizando el contenido`);

    for(let persona of personas){
        text += `<li>${persona.nombre} ${persona.apellido}</li>`;
 
    }
    document.getElementById('list').innerHTML = text;
    return console.log(`${text}`);
};




