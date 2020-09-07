const div = document.querySelector('div');
const words = [];

const addWord = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const Nword = input.value;
    if (input.value.length) {
        for (name of words) {
            if (name === Nword) {
                input.value = '';
                return alert('already exist')
            }
        }
        words.push(Nword);
        div.textContent += Nword + ", ";
        input.value = '';
    }
}



document.querySelector('button').addEventListener('click', addWord);