const spn = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptates, eum aliquam, aut eligendi doloremque illo, accusantium debitis qui cupiditate rem praesentium est quis?';
const spnCursor = document.querySelector('.cursor');
//parameters
let textIndex = 0;
const time = 30

// putting single letters 
const addLetter = () => {
    spn.textContent += txt[textIndex];
    textIndex++;
    if (textIndex === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active')
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);