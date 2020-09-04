const btn = document.querySelector('button');
const div = document.querySelector('div')
div.textContent = 'lets draw'

arr1 = [10, 11, 12, 13, 14, 15, 'a', 'b', 'c', 'd'];
let i;
let arrL = arr1.length;

const arrGen = (array) => {
    let i = Math.floor(Math.random() * arrL);
    console.log(i);
    //console.log(arr[i]);
    div.textContent = `random element is ${arr1[i]};`
};


btn.addEventListener('click', arrGen);