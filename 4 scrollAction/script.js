let size = 0;
let grow = true;
const div = this.document.createElement('div');
document.body.appendChild(div);
window.addEventListener('scroll', function () {
    if (size >= window.innerHeight / 2) {
        grow = !grow;
        div.style.backgroundColor = "red";
    } else if (size < 0) {
        grow = !grow;
        div.style.backgroundColor = "green";
    }
    div.style.height = size + "px";
    grow ? size += 5 : size -= 5;

    this.console.log(size)

})