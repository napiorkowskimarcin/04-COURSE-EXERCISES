let size = 4;
let orderElement = 1;



const btn = document.createElement('button')
btn.innerText = 'click!'
document.body.appendChild(btn);




btn.addEventListener('click', function () {
    const element = document.createElement('div');
    element.innerText = `Element nr ${orderElement}`;
    element.style.fontSize = `${size}px`
    document.body.appendChild(element);
    orderElement++;
    size++;
})