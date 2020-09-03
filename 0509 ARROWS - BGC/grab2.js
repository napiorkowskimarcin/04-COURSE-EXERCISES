let red = 122;
let green = 122;
let blue = 122;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const div = document.createElement('div');
div.innerText = `rgb(${red}, ${green}, ${blue})`
div.style.backgroundColor = 'white'
document.body.appendChild(div);


const changeColor = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 38:
            if (red < 255) {
                red++;
            }
            if (green < 255) {
                green++;
            }
            if (blue < 255)
                blue++;
            div.innerText = `rgb(${red}, ${green}, ${blue})`
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            break;

        case 40:
            if (red > 0) {
                red--;
            }
            if (green > 0) {
                green--;
            }
            if (blue > 0) {
                blue--;
            }
            div.innerText = `rgb(${red}, ${green}, ${blue})`
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;

        case 37:
            if (red > 0) {
                red--;
            }
            if (green < 255) {
                green++;
            }
            if (blue > 0) {
                blue -= 0.5;
            }
            div.innerText = `rgb(${red}, ${green}, ${blue})`
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
        case 39:
            if (red < 255) {
                red++;
            }
            if (green > 0) {
                green--;
            }
            if (blue > 0) {
                blue -= 0.5;
            }
            div.innerText = `rgb(${red}, ${green}, ${blue})`
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
    }


}




window.addEventListener('keydown', changeColor)