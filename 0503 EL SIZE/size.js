const square = document.createElement('div');
let size = 100;
grow = true;
square.style.height = `${size}px`;
square.style.width = `${size}px`;

//square.style.backgroundColor = 'red'
document.body.appendChild(square);

window.addEventListener("scroll", function () {
    if (size > window.innerWidth / 2) {
        grow = false;
    } else if (size <= 0) {
        grow = true;
    }

    if (grow) {
        size += 10;
        square.style.height = `${size}px`;
        square.style.width = `${size}px`;
    } else {
        size -= 10;
        square.style.height = `${size}px`;
        square.style.width = `${size}px`;

    }
})