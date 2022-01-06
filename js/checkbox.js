const checkbox = document.querySelector('.menu-checkbox');
const dropdownMenu = document.querySelector('.menu-options');
      dropdownMenu.style.display = 'none';

checkbox.addEventListener('click', toggle, false);

function toggle(){

    if(dropdownMenu.style.display == 'none'){
        dropdownMenu.style.display = 'flex';
    }else{
        dropdownMenu.style.display = 'none';
    }
    
    console.log('able disable');
}