// renderizando
document.body.onload = renderizar;

// array de personas para uso global
const personas = [];  

// funcion renderizar 
function renderizar(){
    console.log(`renderizando el contenido`);
    let text = '';

    for(let persona of personas){
        text += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    document.getElementById('list').innerHTML = text;
    return console.log(`${text}`);
};


