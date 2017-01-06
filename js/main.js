window.addEventListener('load', init);
function init() {
    window.addEventListener('scroll', onScroll, false);
}
let ticking = false;
let latestKnownScrollY;

function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
}
function requestTick() {
    if (!ticking) requestAnimationFrame(animate);
    ticking = true;
}
function animate() {
    ticking = false;
    sectionOneAnimation();
}

//Section One
function sectionOneAnimation() {
    const secondHill = document.getElementById('secondHillImage');
    const thirdHill = document.getElementById('thirdHillImage');
    let currentScrollY = latestKnownScrollY;
    secondHill.style.bottom = '-' + (currentScrollY * 0.05) + 'vh';
    thirdHill.style.bottom = '-' + (currentScrollY * 0.16) + 'vh';
    if ((currentScrollY * 0.05) > 60) {
        sectionTwoAnimationStart(currentScrollY)
    }
}

//Section Two
function sectionTwoAnimationStart() {
    const mountain1 = document.getElementById('mountain1Image');
    const mountain2 = document.getElementById('mountain2Image');
    if((-100 + ((latestKnownScrollY - 1000) * 0.1)) > 0){
        mountain1.style.bottom = '0vh';
    }else{
        mountain1.style.bottom = -100 + ((latestKnownScrollY - 1000) * 0.1) + "vh";
    }
    if((-100 + ((latestKnownScrollY - 1000) * 0.13)) > 0){
        mountain2.style.bottom = '0vh';
    }else{
        mountain2.style.bottom = -100 + ((latestKnownScrollY - 1000) * 0.13) + "vh";
    }
}