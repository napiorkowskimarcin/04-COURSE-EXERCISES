//IMPORTING
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['GOOD MORNING!', '1..2..3..READY?', 'LETS. . . START!'];

//const time = 300;

let activeLetter = 0;
let activeText = 0;
let time = 300;

const addLetter = () => {
    spnText.textContent += txt[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;

        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
        }, 1000)

    }

    //setTimeout(addLetter, 900);



}
addLetter();


//PREVIOUS EXERCISE
// const cursorAnimation = () => {
//     spnCursor.classList.toggle('active')
// }

const indexTyping = setInterval(addLetter, time);
//setInterval(cursorAnimation, 400);