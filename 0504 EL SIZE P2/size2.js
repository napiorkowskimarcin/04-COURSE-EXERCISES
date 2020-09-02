const rect = document.createElement('div');
let size = 0;
let grow = true;
rect.style.height = `${size}px`;
rect.style.width = '100vw';

document.body.appendChild(rect);

addEventListener('scroll', function () {

    if (size > window.innerHeight / 3) {
        grow = false;
        rect.style.backgroundColor = 'red'
    } else if (size <= 0) {
        grow = true
        rect.style.backgroundColor = 'black'
    }
    if (grow) {
        size += 2;
        rect.style.height = `${size}px`;
    } else {
        size -= 2;
        rect.style.height = `${size}px`;
    }

})