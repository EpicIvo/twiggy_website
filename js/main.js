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
    let currentScrollY = latestKnownScrollY;
    const secondHill = document.getElementById('secondHillImage');
    const thirdHill = document.getElementById('thirdHillImage');
    secondHill.style.bottom = '-' + (currentScrollY * 0.05) + '%';
    thirdHill.style.bottom = '-' + (currentScrollY * 0.16) + '%';
    if ((currentScrollY * 0.05) > 80) {
        sectionTwoAnimationStart()
    }
}

//Section Two
function sectionTwoAnimationStart() {
    let currentScrollY = latestKnownScrollY;
    const mountain1 = document.getElementById('mountain1Image');
    mountain1.style.bottom = (currentScrollY * 0.23) + '%';
    if ((currentScrollY * 0.23) > 80) {
        mountain1.style.bottom = '0%';
        console.log('bottom: ' + mountain1.style.bottom);
    } else if ((currentScrollY * 0.23) < 80) {
        mountain1.style.bottom = (currentScrollY * 0.23) + '%';
    }
}