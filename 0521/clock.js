showTime = () => {
    let time = new Date();
    document.querySelector("span").textContent = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();


}

showCount = () => {
    let nowTime = new Date().getTime();
    //console.log(nowTime);
    let endTime = new Date('2021-01-01 00:01').getTime();
    //console.log(endTime);
    let left = endTime - nowTime;
    //console.log(left);
    let leftInD = Math.floor(left / (24 * 60 * 60 * 1000));
    let leftInH = Math.floor((left - (leftInD * 24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    leftInH = leftInH < 10 ? `0${leftInH}` : leftInH;
    let leftInM = Math.floor((left - (leftInH * 60 * 60 * 1000) - (leftInD * 24 * 60 * 60 * 1000)) / (60 * 1000));
    leftInM = leftInM < 10 ? `0${leftInM}` : leftInM;
    let leftInS = Math.floor((left - (leftInM * 60 * 1000) - (leftInH * 60 * 60 * 1000) - (leftInD * 24 * 60 * 60 * 1000)) / (1000));
    leftInS = leftInS < 10 ? `0${leftInS}` : leftInS;
    //console.log(leftInD + ':' + leftInH + ':' + leftInM + ":" + leftInS);
    document.getElementById("countSpan").textContent = (leftInD + 'days : ' + leftInH + 'h : ' + leftInM + "min : " + leftInS + "sek ");
}


window.onload = setInterval(showTime, 1000);
window.onload = setInterval(showCount, 1000);

//STOPWATCH 
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.showT');


let time = 0;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        btnStart.textContent = 'pause';
        active = !active;
        idI = setInterval(start, 10);
    } else {
        btnStart.textContent = 'start';
        active = !active;
        clearInterval(idI);
    }

}

const start = () => {
    time++
    panel.textContent = (time / 100).toFixed(2);
}



const reset = () => {
    time = 0;
    panel.textContent = '-----';
    clearInterval(idI);
    btnStart.textContent = 'start';
    active = false;
}





btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);