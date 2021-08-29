// renderizando
document.body.onload = localStorageValidator, renderizar;

// array de personas para uso global
const personas = [];  

// funcion renderizar 
function renderizar(){
    let text = '';
    console.log(`renderizando el contenido`);

    for(let persona of personas){
        text += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('list').innerHTML = text;
    
    return console.log(`${text}`);
}




// function localStorageValidator(){
//     let texto = '';
    
//     if(localStorage.length == 0){
//         console.log("storage vacio");
//     }else{
//         console.log('storage lleno');
//         // let localSList = JSON.stringify(localStorage.getItem());
//         Object.keys(localStorage).forEach(function(key){
            
//             const lsKeys = localStorage.getItem(key);
//             texto += `<li>${lsKeys}</li>`;
//         });
//     }
//     document.getElementById('list').innerHTML = texto;
//     console.log(`lista del localStorage renderizada`);
// }