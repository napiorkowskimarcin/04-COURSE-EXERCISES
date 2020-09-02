document.body.addEventListener("click", function (e) {
    const eventX = e.clientX;
    const eventY = e.clientY;
    if (eventX % 2 === 0 && eventY % 2 === 0) {
        console.log('double even');
        document.body.style.backgroundColor = 'green';
    } else if (eventX % 2 === 0 || eventY % 2 === 0) {
        console.log('one even one odd');
        document.body.style.backgroundColor = 'red'
    } else {
        console.log('double odd');
        document.body.style.backgroundColor = 'yellow'
    }
})