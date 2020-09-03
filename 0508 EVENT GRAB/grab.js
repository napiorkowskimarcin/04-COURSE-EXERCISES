const div = document.querySelector('div');

let pX = 150;
let pY = 150;
div.style.left = pX + 'px';
div.style.top = pY + 'px';
let hover = false;


let insertX;
let inserty;

div.addEventListener('mousedown', function (e) {
    console.log('wciśnięta');
    div.style.backgroundColor = 'gray';
    hover = true;
    insertX = e.offsetX;
    insertY = e.offsetY;

});
div.addEventListener('mousemove', function (e) {
    if (hover) {
        console.log('ruszone');
        pX = e.clientX - insertX;
        pY = e.clientY - insertY;
        div.style.left = (pX) + 'px';
        div.style.top = (pY) + 'px';
    }
});



div.addEventListener('mouseup', function () {
    hover = false;
    console.log('puszczone');
    div.style.backgroundColor = 'black';
});