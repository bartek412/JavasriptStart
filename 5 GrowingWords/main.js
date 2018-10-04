const liItems = document.querySelectorAll('li');
let liFontSize = 10;
document.querySelector("button").addEventListener('click', () => {
    liItems.forEach((liItem) => {
        if (!liItem.style.display) {
            liItem.style.display = "block";
        }
        liItem.style.fontSize = liFontSize + "px";
    })
    liFontSize++;
})