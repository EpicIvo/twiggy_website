window.addEventListener('load', init);

function init() {
    scroll();
}

function scroll() {
    let scrollY = document.getElementById('body').scrollTop;
    if (scrollY > 1){
        document.getElementById('gameOnPhoneImage').style.marginTop = '-100%';
    }else{
        document.getElementById('gameOnPhoneImage').style.marginTop = '14%';
    }
    console.log('pos: ' + scrollY)
}