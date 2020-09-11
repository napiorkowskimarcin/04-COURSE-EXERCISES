// //REMOVING ITEM
// const removeTask = (e) => {
//     //e.target.parentNode.remove();
//     e.target.parentNode.style.textDecoration = 'line-through';
//     e.target.remove();
// }

// document.querySelectorAll('li').forEach(item =>
//     item.addEventListener('click', removeTask))


// //FILTERING

// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// const liElements = document.querySelectorAll('li');

// const search = (e) => {
//     let searchText = e.target.value.toLowerCase();
//     let arr = [...liElements];
//     arr = arr.filter((li) => li.textContent.toLowerCase().includes(searchText));
//     ul.textContent = '';
//     arr.forEach(li => ul.appendChild(li));

// }

// input.addEventListener('input', search);
const toDo = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNo = document.querySelector('span');
const listEl = document.getElementsByClassName('task');
let input = document.querySelector('input');

const removeT = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDo.splice(index, 1)

    console.log(toDo);
    ul.textContent = '';
    toDo.forEach((toDoEl, key) => {
        toDoEl.dataset.key = key;
        ul.appendChild(toDoEl);
    })
    taskNo.textContent = listEl.length;

}


const addTask = (e) => {
    e.preventDefault();
    if (!input.value) return;
    const titleTask = input.value;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = titleTask + "<button> remove </button>";
    toDo.push(newTask);
    ul.textContent = '';
    toDo.forEach((toDoEl, key) => {
        toDoEl.dataset.key = key;
        ul.appendChild(toDoEl);
    })

    input.value = '';
    taskNo.textContent = listEl.length;
    newTask.querySelector('button').addEventListener('click', removeT);
    console.log(toDo);

}




form.addEventListener('submit', addTask)