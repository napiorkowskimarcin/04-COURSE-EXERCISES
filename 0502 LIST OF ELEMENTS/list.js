const btn = document.querySelector('button');

let number = 1;

const addNo = () => {
    const liEl = document.createElement('li');
    liEl.textContent = `Kolejny element to ${number}`;
    if (number % 3 === 0) {
        liEl.classList.add('bigger')
    }
    document.querySelector('ul').appendChild(liEl);
    number += 2;
}
btn.addEventListener('click', addNo);