const slideList = [{
    img: "images/img1.jpg",
    txt: 'Pierwszy tekst'
}, {
    img: "images/img2.jpg",
    txt: 'Drugi tekst'
}, {
    img: "images/img3.jpg",
    txt: 'Trzeci tekst'
}, ];
const dots = [...document.querySelectorAll('.dots span')];
const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

let active = 0;
const time = 3000;

function changeImgsAndH1() {
    img.src = slideList[active].img;
    h1.textContent = slideList[active].txt;
}
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0;
    changeImgsAndH1();
    changeDot();
}
const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 39 ? active++ : active--;
        if (active == slideList.length) active = 0;
        if (active < 0) active = slideList.length - 1;
        changeImgsAndH1();
        changeDot();
        indexInterval = setInterval(changeSlide, time);
    }

}


window.addEventListener('keydown', keyChangeSlide);
let indexInterval = setInterval(changeSlide, time);