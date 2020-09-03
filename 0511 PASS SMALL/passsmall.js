const input = document.getElementById('pass');
const div = document.querySelector('.message');


const paswwords = ["User", "wiOsna"];
const message = ["message is shown.", "another message is shown"];
console.log(paswwords);

paswwords.forEach((pasword, i) => {
    paswwords[i] = pasword.toLowerCase();
})
console.log(paswwords);

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value.toLowerCase();
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