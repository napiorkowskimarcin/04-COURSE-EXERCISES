const chars = 'ABCDEFGHIJK012345678!&*';
const btn = document.querySelector('button')
const section = document.querySelector('section')
const codesNo = 1000;
const charsNo = 10;




codesGenerator = () => {
    for (let i = 0; i < codesNo; i++) {
        let code = "";
        for (let j = 0; j < charsNo; j++) {
            const ind = Math.floor(Math.random() * chars.length);
            code += chars[ind];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}


btn.addEventListener('click', codesGenerator);