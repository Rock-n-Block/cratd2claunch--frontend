
function changeBodyOverflow() { // TODO: make working
    console.log('function called');
    if (document.getElementById('menu__toggle').checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
}