//WELCOME PANEL----------------------------------------------------------
const divLogin = document.getElementById('divLogin');
const nick = document.getElementById('putNick');
const pass = document.getElementById('putPassword');

const btnLog = document.getElementById('logIn');

login = () => {
    if (nick.value === 'NAME' && pass.value === 'PASS') {
        divLogin.style.display = 'none';
        document.getElementById('importData').style.display = 'block';
        document.getElementById('name').textContent = `put your tasks ${nick.value}`;
    } else {
        console.log('alert');
        if (nick.value === 'NAME') {
            console.log('NAME IS NAME')
        } else {
            console.log('NAME IS not NAME')
        }
        if (pass.value === 'PASS') {
            console.log('PASS IS PASS')
        } else {
            console.log('PASS IS not PASS')
        }
    }
}



btnLog.addEventListener('click', login)

//PREPARING THE HEADER--------------------------------------------------------------------------------------
spanName = document.getElementById('name');

showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    seconds = (seconds < 10 ? `0${seconds}` : seconds);
    minute = (minute < 10 ? `0${minute}` : minute);
    hour = (hour < 10 ? `0${hour}` : hour)
    document.getElementById('time').textContent = `${hour}:${minute}:${seconds}`
}

window.onload = setInterval(showTime, 1000);




//CREATE ELEMENT OF THE LIST---------------------------------------------------------------------------------
//SAVE ELEMENTS TO MAKE IT EASIER TO READ

btnImport = document.getElementById('acceptImport');
inputTitle = document.getElementById('putTitle');
inputTask = document.getElementById('putTask');
inputRate = document.getElementById('formControl');

//TRYING SOLUTION WITH ARRAY TO DO:
const toDo = [];

//REMOVING TASK THAT IS FINISHED

rmTask = (e) => {
    e.target.parentNode.remove();
    console.log('removing')
}

addTask = () => {
    let taskTitle = inputTitle.value;
    let taskName = inputTask.value;
    let taskRate = inputRate.options[inputRate.selectedIndex].value;
    if (taskName && taskTitle) {
        //CREATE ELEMENTS WITH CLASS 
        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.textContent = taskTitle;
        let divName = document.createElement('div');
        divName.classList.add('name');
        divName.textContent = taskName;
        let divRate = document.createElement('div');
        divRate.classList.add('rate');
        divRate.textContent = `RATE :`;
        let divContainer = document.createElement('div');
        divContainer.classList.add('taskContainer');
        let spanRate = document.createElement('span');
        spanRate.textContent = taskRate;
        let divRm = document.createElement('button')
        divRm.classList.add('rmButton');
        divRm.textContent = 'remove';
        //to do trial
        //toDo.push(taskTitle);
        inputTitle.value = '';
        inputTask.value = '';

        //ADD DIVS TO DIV CONTAINER AND THEN CONTAINER TO MAIN

        divContainer.appendChild(divTitle);
        divContainer.appendChild(divName);
        divContainer.appendChild(divRate);
        divContainer.appendChild(divRm);
        divRate.appendChild(spanRate);
        document.getElementById('main').appendChild(divContainer);


        divContainer.querySelector('button').addEventListener('click', rmTask);

    } else {
        alert('something missing')
    }

}

btnImport.addEventListener('click', addTask);