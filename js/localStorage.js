// almacenando el nuevo valor de la lista que esta en el 'storageArray' en el localstorage
function cache(storageArray){

    for(let i=0; i < storageArray.length ; i++){
        // VAMOOOS! POR FIN LOGRÉ HACER QUE ME GUARDE EN ORDEN LOS VALORES --- me llevó un día para encontrarle la vuelta
        localStorage.setItem([i], storageArray[i]);
        console.log('nuevo elemento en el ls ' + [i]);
    }
}

// btn borrar local storage
document.getElementById('btn-delete').addEventListener('click', () => {
    localStorage.clear();
})