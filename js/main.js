window.addEventListener('load', init);
function init() {
    window.addEventListener('scroll', onScroll, false);
}
let ticking = false;
let latestKnownScrollY;
let heightPercentage;
let scrollHeight;
const bodyHeight = document.getElementById('body').clientHeight;
const viewHeight = document.getElementById('overlayAnimations').clientHeight;

//Elements
//Home
const homeTitle = document.getElementById('homeTitle');
//Section1
const secondHill = document.getElementById('secondHillImage');
const thirdHill = document.getElementById('thirdHillImage');
//Section2
const mountain1 = document.getElementById('mountain1Image');
const mountain2 = document.getElementById('mountain2Image');
const mountain3 = document.getElementById('mountain3Image');
const sectionTwoTitle = document.getElementById('playTitle');
const sectionTwoText = document.getElementById('playText');
//section3
const desertHill1 = document.getElementById('desertHill1Image');
const desertHill2 = document.getElementById('desertHill2Image');
const desertHill3 = document.getElementById('desertHill3Image');
//section4
const hill4 = document.getElementById('hill4Image');
const ocean = document.getElementById('oceanImage');

function onScroll() {
    latestKnownScrollY = window.scrollY;
    heightPercentage = ((((latestKnownScrollY + viewHeight) + bodyHeight) / scrollHeight) * 100) - 100;
    scrollHeight = document.body.scrollHeight;
    console.log('LKSY: ' + latestKnownScrollY + ' // Bodyheight: ' + bodyHeight + ' // Scrollpercentage: ' + heightPercentage + ' // ViewHeight: ' + viewHeight);
    requestTick();
}
function requestTick() {
    if (!ticking) requestAnimationFrame(animate);
    ticking = true;
}
function animate() {
    ticking = false;
    animateSeedToPlant();
    sectionOneAnimation();
    if(heightPercentage > 33.3 && heightPercentage < 58.3){
        sectionTwoAnimation();
    }else if (heightPercentage > 58.3 && heightPercentage < 83.3){
        sectionThreeAnimation();
    }else if (heightPercentage > 83.3){
        sectionFourAnimation();
    }else{
        console.log('section 1');
    }
}

function animateSeedToPlant() {
    const appleSeed = document.getElementById('appleSeedImage');
    const plant = document.getElementById('plant');
    const plantText = document.getElementById('plantText');
    appleSeed.style.top = 55 + latestKnownScrollY * 0.05 + '%';
    plantText.style.opacity = 1 - (latestKnownScrollY * 0.0015);
    if ((50 + latestKnownScrollY * 0.05) > 85) {
        appleSeed.style.opacity = '0';
        plant.style.opacity = '1';
    } else {
        appleSeed.style.opacity = '1';
        plant.style.opacity = '0';
    }
}

//Section One
function sectionOneAnimation() {
    homeTitle.style.marginTop = '0%';
    mountain1.style.bottom = '-100vh';
    mountain2.style.bottom = '-100vh';
    mountain3.style.bottom = '-100vh';
    //Text
    sectionTwoTitle.style.marginRight = '-20%';
    sectionTwoText.style.marginRight = '-35%';
    //Go down
    secondHill.style.bottom = '-' + ((latestKnownScrollY) * 0.05) + 'vh';
    thirdHill.style.bottom = '-' + ((latestKnownScrollY) * 0.16) + 'vh';
}

function sectionTwoAnimation() {
    homeTitle.style.marginTop = '-20%';
    mountain1.style.bottom = '0vh';
    mountain2.style.bottom = '0vh';
    mountain3.style.bottom = '0vh';
    desertHill1.style.bottom = '-100vh';
    desertHill2.style.bottom = '-100vh';
    desertHill3.style.bottom = '-100vh';
    desertHill1.style.transitionDuration = '2.2s';
    desertHill3.style.transitionDuration = '1s';
    hill4.style.bottom = '-100vh';
    ocean.style.bottom = '-100vh';
    //Text
    sectionTwoTitle.style.marginRight = '40%';
    sectionTwoText.style.marginRight = '40%';
}

function sectionThreeAnimation() {
    mountain1.style.bottom = '-100vh';
    mountain2.style.bottom = '-100vh';
    mountain3.style.bottom = '-100vh';
    desertHill1.style.bottom = '0vh';
    desertHill2.style.bottom = '0vh';
    desertHill3.style.bottom = '0vh';
    desertHill1.style.transitionDuration = '1s';
    desertHill3.style.transitionDuration = '2.2s';
    hill4.style.bottom = '-100vh';
    ocean.style.bottom = '-100vh';
    //Text
    sectionTwoTitle.style.marginRight = '-20%';
    sectionTwoText.style.marginRight = '-35%';
}

function sectionFourAnimation() {
    desertHill1.style.bottom = '-100vh';
    desertHill2.style.bottom = '-100vh';
    desertHill3.style.bottom = '-100vh';
    desertHill1.style.transitionDuration = '2.2s';
    desertHill3.style.transitionDuration = '1s';
    hill4.style.bottom = '0vh';
    ocean.style.bottom = '0vh';
}