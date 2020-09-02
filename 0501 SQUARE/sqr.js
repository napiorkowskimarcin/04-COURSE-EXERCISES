//set variable as button
const btn = document.querySelector("button");
//number to put as text content
let number = 1;
//create function to create and add divs to document
const addSQR = () => {
    const sqR = document.createElement('div');
    sqR.textContent = number;

    if (number % 5 === 0) {
        // console.log('podzielny przez 5');
        sqR.classList.add('circle');
    }
    document.querySelector('main').appendChild(sqR);
    number++;
}
//create action on button
btn.addEventListener('click', addSQR);