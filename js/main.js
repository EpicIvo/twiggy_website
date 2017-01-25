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
const mainHill = document.getElementById('mainHillImage');
const homeTitle = document.getElementById('homeTitle');
const appleSeed = document.getElementById('appleSeedImage');
const plant = document.getElementById('plant');
const plantText = document.getElementById('plantText');
//Section1
const secondHill = document.getElementById('secondHillImage');
const thirdHill = document.getElementById('thirdHillImage');
//Section2
const mountain1 = document.getElementById('mountain1Image');
const mountain2 = document.getElementById('mountain2Image');
const mountain3 = document.getElementById('mountain3Image');
const sectionTwoTitle = document.getElementById('playTitle');
const sectionTwoText = document.getElementById('playText');
const sectionTwoTitleContent = document.getElementById('playTitleContent');
const sectionTwoTextContent = document.getElementById('playTextContent');
//section3
const desertHill1 = document.getElementById('desertHill1Image');
const desertHill2 = document.getElementById('desertHill2Image');
const desertHill3 = document.getElementById('desertHill3Image');
const sectionThreeTitle = document.getElementById('earnTitle');
const sectionThreeText = document.getElementById('earnText');
const sectionThreeTitleContent = document.getElementById('earnTitleContent');
const sectionThreeTextContent = document.getElementById('earnTextContent');
//section4
const hill4 = document.getElementById('hill4Image');
const ocean = document.getElementById('oceanImage');
const sectionFourTitle = document.getElementById('plantSectionTitle');
const sectionFourText = document.getElementById('plantSectionText');
const sectionFourTitleContent = document.getElementById('plantSectionTitleContent');
const sectionFourTextContent = document.getElementById('plantSectionTextContent');

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
    if (heightPercentage < 33.3){
        animateSeedToPlant();
        sectionOneAnimation();
    }
    else if(heightPercentage > 33.3 && heightPercentage < 58.3){
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
    appleSeed.style.top = 60 + latestKnownScrollY * 0.05 + '%';
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
    //Text2
    sectionTwoTitle.style.marginLeft = '200%';
    sectionTwoText.style.marginLeft = '200%';
    //Go down
    secondHill.style.bottom = '-' + ((latestKnownScrollY) * 0.05) + 'vh';
    thirdHill.style.bottom = '-' + ((latestKnownScrollY) * 0.16) + 'vh';
}

function sectionTwoAnimation() {
    //Make sure previous stage is really gone
    plantText.style.opacity = '0';
    appleSeed.style.opacity = '0';

    mainHill.style.opacity = '1';
    plant.style.opacity = '1';
    plant.src = 'media/main/gifs/1.gif';
    plant.style.top = '85%';
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
    //Text2
    sectionTwoTitle.style.marginLeft = '0%';
    sectionTwoText.style.marginLeft = '0%';
    sectionTwoTitleContent.style.marginLeft = 'auto';
    sectionTwoTextContent.style.marginLeft = 'auto';
    sectionTwoTitleContent.style.marginRight = 'auto';
    sectionTwoTextContent.style.marginRight = 'auto';
    //Text3
    sectionThreeTitle.style.marginLeft = '200%';
    sectionThreeText.style.marginLeft = '200%';
}

function sectionThreeAnimation() {
    mainHill.style.opacity = '0';
    plant.src = 'media/main/gifs/4.gif';
    plant.style.top = '75%';
    mountain1.style.bottom = '-100vh';
    mountain2.style.bottom = '-100vh';
    mountain3.style.bottom = '-100vh';
    desertHill1.style.bottom = '-10vh';
    desertHill2.style.bottom = '-20vh';
    desertHill3.style.bottom = '-30vh';
    desertHill1.style.transitionDuration = '1s';
    desertHill3.style.transitionDuration = '2.2s';
    hill4.style.bottom = '-100vh';
    ocean.style.bottom = '-100vh';
    //Text2
    sectionTwoTitle.style.marginLeft = '-200%';
    sectionTwoText.style.marginLeft = '-200%';
    //Text3
    sectionThreeTitle.style.marginLeft = '0%';
    sectionThreeText.style.marginLeft = '0%';
    sectionThreeTitleContent.style.marginLeft = 'auto';
    sectionThreeTextContent.style.marginLeft = 'auto';
    sectionThreeTitleContent.style.marginRight = '5%';
    sectionThreeTextContent.style.marginRight = '5%';
    //Text4
    sectionFourTitle.style.marginLeft = '200%';
    sectionFourText.style.marginLeft = '200%';
}

function sectionFourAnimation() {
    mainHill.style.opacity = '1';
    plant.src = 'media/main/gifs/smaller7.gif';
    plant.style.top = '50%';
    desertHill1.style.bottom = '-100vh';
    desertHill2.style.bottom = '-100vh';
    desertHill3.style.bottom = '-100vh';
    desertHill1.style.transitionDuration = '2.2s';
    desertHill3.style.transitionDuration = '1s';
    hill4.style.bottom = '0vh';
    ocean.style.bottom = '0vh';
    //Text3
    sectionThreeTitle.style.marginLeft = '-200%';
    sectionThreeText.style.marginLeft = '-200%';
    //Text4
    sectionFourTitle.style.marginLeft = '0%';
    sectionFourText.style.marginLeft = '5%';
    sectionFourTitleContent.style.marginLeft = 'auto';
    sectionFourTextContent.style.marginLeft = 'auto';
    sectionFourTitleContent.style.marginRight = '95%';
    sectionFourTextContent.style.marginRight = '95%';
}
