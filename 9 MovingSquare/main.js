const div = document.querySelector('div');
let divMove = false;
let insertDivX;
let insertDivY;
div.addEventListener("mousedown", (e) => {
    div.style.backgroundColor = "gray"
    divMove = !divMove
    insertDivX = e.offsetX
    insertDivY = e.offsetY
})
div.addEventListener("mousemove", (e) => {
    if (divMove) {
        div.style.top = `${e.clientY-insertDivY}px`
        div.style.left = `${e.clientX-insertDivX}px`
    }
})
div.addEventListener("mouseup", () => {
    divMove = !divMove
    div.style.backgroundColor = "black"
})