const btnAdd = document.getElementById('add');
const btnRemove = document.getElementById('remove');
const btnAdvice = document.getElementById('adv');
const btnOptions = document.getElementById('options');
const div = document.getElementById('divAdv');
const input = document.querySelector('input');

div.textContent = ''
let arr = [];


addAdvice = (e) => {
    e.preventDefault();

    let inputText = input.value;
    if (input.value.length) {
        arr.push(inputText);
        //div.textContent += inputText;
        input.value = '';
        // console.log(div.textContent);
        console.log(arr);

    }
    return arr;
}

showOptions = () => {
    console.log(arr);
    div.textContent = arr;
}

removeArr = () => {
    arr.length = 0
    console.log(arr);
    div.textContent = 'hey! it is empty'
}

showRandom = () => {
    let newArr = arr;
    // console.log(arr);
    //console.log(arr.length);
    if (newArr.length > 0) {
        let i = Math.floor(Math.random() * arr.length);
        div.textContent = `random element of array is ${arr[i]}`;
    } else {
        div.textContent = 'hey! not enogh elements!'
    }
}

btnAdd.addEventListener('click', addAdvice);
btnOptions.addEventListener('click', showOptions)
btnRemove.addEventListener('click', removeArr);
btnAdvice.addEventListener('click', showRandom)