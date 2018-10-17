const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = [`DZIEŃ DOBRY !!! `, `FAJNIE, ŻE JESTEŚ :) `, `ZACZYNAMY...`];
let arrayIndex = 0;
let letterIndex = 0;

const addLetter = () => {
    while (arrayIndex < txt.length) {

        while (letterIndex < txt[arrayIndex].length) {
            spnText.textContent += txt[arrayIndex][letterIndex];
            letterIndex++;
            return setTimeout(addLetter, 100);
        }
        if (arrayIndex < txt.length - 1)
            spnText.textContent = '';
        letterIndex = 0;
        arrayIndex++;
        return setTimeout(addLetter, 1000);
    }

}


addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);