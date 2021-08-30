// almacenando el nuevo valor de la lista que esta en el 'storageArray' en el localstorage
function cache(storageArray){

    for(let i=0; i < storageArray.length ; i++){
        // VAMOOOS! POR FIN LOGRÉ HACER QUE ME GUARDE EN ORDEN LOS VALORES --- me llevó un día para encontrarle la vuelta
        localStorage.setItem([i], storageArray[i]);
        console.log('nuevo elemento en el ls ' + [i]);
    }
}

// verificando si el localStorage tiene contenido para renderizarlo y ponerlos como lista
function localStorageValidator(){
    let texto = '';
    
    if(localStorage.length == 0){
        console.log("storage vacio");
    }else{
        console.log('storage lleno');
        // let localSList = JSON.stringify(localStorage.getItem());
        Object.keys(localStorage).forEach(function(key){
            
            const lsKeys = localStorage.getItem(key);
            texto += `<li>${lsKeys}</li>`;
        });
    }
    document.getElementById('list').innerHTML = texto;
    console.log(`lista del localStorage renderizada`);
}

// btn borrar local storage
document.getElementById('btn-delete').addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
    cleaning();
});