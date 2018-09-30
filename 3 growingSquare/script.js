const div = document.createElement('div');
let size = 100;
div.style.height = size + "px";
div.style.width = size + "px";
document.body.appendChild(div);
let grow = true;
window.addEventListener('scroll', function () {
    if (size >= window.innerHeight / 2) grow = !grow;
    else if (size <= 10) grow = !grow;
    grow ? size += 5 : size -= 5;
    div.style.height = size + "px";
    div.style.width = size + "px";
})