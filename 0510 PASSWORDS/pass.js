const input = document.getElementById('pass');
const div = document.querySelector('.message');

const paswwords = ["user", "wiosna"];
const message = ["message is shown.", "another message is shown"];

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;
    paswwords.forEach((pass, index) => {
        if (pass === text) {
            div.textContent = message[index];
        }
    })
})


input.addEventListener('focus', (e) => {
    e.target.classList.toggle('active');
})

input.addEventListener('blur', function (e) {
    this.classList.toggle('active');
})