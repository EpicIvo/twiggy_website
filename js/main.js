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
    sectionTwoAnimationStart();
    sectionThreeAnimationStart();
    sectionFourAnimation();
    console.log('LKSY:' + latestKnownScrollY);
}

//Section One
function sectionOneAnimation() {
    const secondHill = document.getElementById('secondHillImage');
    const thirdHill = document.getElementById('thirdHillImage');
    let currentScrollY = latestKnownScrollY;
    secondHill.style.bottom = '-' + (currentScrollY * 0.05) + 'vh';
    thirdHill.style.bottom = '-' + (currentScrollY * 0.16) + 'vh';
}

//Section Two
function sectionTwoAnimationStart() {
    const mountain1 = document.getElementById('mountain1Image');
    const mountain2 = document.getElementById('mountain2Image');
    let mountain1YPosition = -100 + ((latestKnownScrollY - 1000) * 0.1);
    let mountain2YPosition = -100 + ((latestKnownScrollY - 1000) * 0.13);
    //Go up
    mountain1YPosition > 0 ? mountain1.style.bottom = '0vh' : mountain1.style.bottom = mountain1YPosition + "vh";
    mountain2YPosition > 0 ? mountain2.style.bottom = '0vh' : mountain2.style.bottom = mountain2YPosition + "vh";
    //Back down
    if(latestKnownScrollY > 2400){
        mountain1.style.bottom = 0 - ((latestKnownScrollY - 2400) * 0.1) + "vh";
        mountain2.style.bottom = 0 - ((latestKnownScrollY - 2400) * 0.13) + "vh";
    }
}

//Section Three
function sectionThreeAnimationStart() {
    const desertHill1 = document.getElementById('desertHill1Image');
    const desertHill2 = document.getElementById('desertHill2Image');
    const desertHill3 = document.getElementById('desertHill3Image');
    let desertHill1YPosition = -100 + ((latestKnownScrollY - 3300) * 0.1);
    let desertHill2YPosition = -100 + ((latestKnownScrollY - 3300) * 0.13);
    let desertHill3YPosition = -100 + ((latestKnownScrollY - 3300) * 0.08);
    console.log(desertHill1.style.bottom);
    //Go up
    desertHill1YPosition > 0 ? desertHill1.style.bottom = '0vh' : desertHill1.style.bottom = desertHill1YPosition + "vh";
    desertHill2YPosition > 0 ? desertHill2.style.bottom = '0vh' : desertHill2.style.bottom = desertHill2YPosition + "vh";
    desertHill3YPosition > 0 ? desertHill3.style.bottom = '0vh' : desertHill3.style.bottom = desertHill3YPosition + "vh";
    //Back down
    if(latestKnownScrollY > 5700) {
        desertHill1.style.bottom = 0 - ((latestKnownScrollY - 5700) * 0.1) + "vh";
        desertHill2.style.bottom = 0 - ((latestKnownScrollY - 5700) * 0.13) + "vh";
        desertHill3.style.bottom = 0 - ((latestKnownScrollY - 5700) * 0.08) + "vh";
    }
}

//Sections Four
function sectionFourAnimation() {
    const hill4 = document.getElementById('hill4Image');
    const ocean = document.getElementById('oceanImage');
    let hill4YPosition = -100 + ((latestKnownScrollY - 6300) * 0.14);
    let oceanYPosition = -100 + ((latestKnownScrollY - 6300) * 0.10);
    hill4YPosition > 0 ? hill4.style.bottom = '0vh' : hill4.style.bottom = hill4YPosition + 'vh';
    oceanYPosition > 0 ? ocean.style.bottom = '0vh' : ocean.style.bottom = oceanYPosition + 'vh';
    if (latestKnownScrollY > 7700) {
        hill4.style.bottom = 0 - ((latestKnownScrollY - 7700) * 0.10) + 'vh';
        ocean.style.bottom = 0 - ((latestKnownScrollY - 7700) * 0.14) + 'vh';
    }
}