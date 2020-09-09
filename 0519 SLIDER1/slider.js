const slideList = [{
    img: "images/img1.jpg",
    text: "pierwszy tekst"
}, {
    img: "images/img2.jpg",
    text: "drugi tekst"
}, {
    img: "images/img3.jpg",
    text: "trzeci tekst"
}];

const dots = [...document.querySelectorAll('.dots span')];

//settings
const time = 3000;
let active = 0;



const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
changeDot = () => {
    let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

printActive = () => {
    console.log(active)
}
let indexInt = setInterval(changeSlide, time);
setInterval(printActive, 100)


keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInt);
        e.keyCode == 37 ? active-- : active++;
        if (active == slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        indexInt = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide)