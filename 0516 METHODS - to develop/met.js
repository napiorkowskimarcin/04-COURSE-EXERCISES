let mainArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//SHOWING FIRST ARRAY
const arrSpan = document.getElementById('arrSpan');
arrSpan.textContent = `First array is: [${mainArr}]`;

//MULTIPLY FIRST ARRAY
const multiSpan = document.getElementById('multiplied');
multiSpan.textContent = `multiplied array is: [${mainArr}]`;
const mMulti = document.getElementById('inputMulti');
let newMainArr = mainArr;

multiply = () => {
    if (mMulti.value.length > 0 && !isNaN(parseFloat(mMulti.value))) {
        newMainArr = mainArr.map((x) => {
            return x * mMulti.value;
        });
        multiSpan.textContent = `multiplied array is: [${newMainArr}]`;
    } else {
        alert('hey it is not a number!')
    }
    mMulti.value = '';
}
document.getElementById("btnMulti").addEventListener('click', multiply);

//SUMMING MULTIPLIED ARRAY
let sum = 0;

function summing(item) {
    sum += item;
}
document.getElementById('summed').textContent = '0';
updateSum = () => {
    sum = 0;
    newMainArr.forEach(summing);
    document.getElementById('summed').textContent = sum;
}
document.getElementById('btnSum').addEventListener('click', updateSum);


//ADDING NEW ELEMENTS TO THE FIRST ARRAY
const addArray = mainArr;
const mAdd = document.getElementById('inputAdd');
addElement = () => {
    if (mAdd.value.length > 0 && !isNaN(mAdd.value)) {
        addArray.push(parseFloat(mAdd.value));
        document.getElementById('addText').textContent = `Now the array looks like: ${addArray}`;
        mAdd.value = '';
        return mainArr;
    } else {
        alert('hey! it is empty or it is not a number!');
    }
}

document.getElementById('btnAdd').addEventListener('click', addElement);

//CHEKING ARRAYS WITH EVERY

greaterThan3 = element => {
    return (element >= 3)
}

btnCheck = () => {
    document.getElementById('greaterValue').textContent = newMainArr.every(greaterThan3);
    if (newMainArr.every(greaterThan3)) {
        document.getElementById('greaterValue').classList.add('green')
        document.getElementById('greaterValue').classList.remove('red')
    } else {
        document.getElementById('greaterValue').classList.add('red')
    }

}

document.getElementById('btnCheck').addEventListener('click', btnCheck);

//SELECTING RANDOM ELEMENT 

randomElement = () => {
    document.getElementById('random').textContent = newMainArr[Math.floor(Math.random() * newMainArr.length)];
}

document.getElementById('btnRandom').addEventListener('click', randomElement);

//ADDING NEW RANDOM ELEMENTS

const randomDiv = () => {
    const divR = document.createElement('div');
    divR.textContent = ` ${newMainArr[Math.floor(Math.random() * newMainArr.length)]},  `;
    document.getElementById('moreElements').appendChild(divR);
}

document.getElementById('addDiv').addEventListener('click', randomDiv);

//FILTER EVEN NUMBERS
filterEven = n => document.getElementById('evenN').textContent = newMainArr.filter((n) => !(n % 2))
document.getElementById('btnEven').addEventListener('click', filterEven);


everyEven = n => document.getElementById('everyEven').textContent = newMainArr.every(n => !(n % 2));
document.getElementById('btnEveryEven').addEventListener('click', everyEven)