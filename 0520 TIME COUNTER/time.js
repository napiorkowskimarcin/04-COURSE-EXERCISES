const time = () => {
    let number = 0;
    document.body.textContent = `spędziłeś ${number} sekund`;
    return () => {
        number++
        document.body.textContent = `spędziłeś ${number} sekund`;
    }
}


window.onload = setInterval(time(), 1000);