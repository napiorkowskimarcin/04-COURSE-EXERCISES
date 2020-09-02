const btn = document.querySelector('button');
const list = document.querySelectorAll('li');

let textSize = 8;

btn.addEventListener('click', function () {
    list.forEach(function (listItem) {
        listItem.style.display = 'list-item';
        listItem.style.fontSize = textSize + 'px';
    })
    textSize += 1;
})