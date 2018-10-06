document.body.addEventListener("click", e => {
    document.body.style.backgroundColor = getColor(e);
})
const getColor = e => {
    // console.log(e.clientY, e.clientX)
    let color;
    if (e.clientY % 2 && e.clientX % 2) color = "blue";
    else if (!(e.clientY % 2) && !(e.clientX % 2)) color = 'red';
    else color = 'green';
    return color;
}