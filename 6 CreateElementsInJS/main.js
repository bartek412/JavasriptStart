let size = 10;
let number = 1;
const btn = document.createElement('button');
const ul = document.createElement('ul');

const init = () => {
    btn.textContent = 'Dodaj 10 elementów listy'
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
    for (i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `element nr ${number}`;
        li.style.fontSize = `${size}px`;
        ul.appendChild(li);
        size++;
        number++;
    }
}

init()