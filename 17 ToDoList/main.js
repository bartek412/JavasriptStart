const form = document.querySelector('.form');
const ul = document.querySelector('ul[data-tasklist]')
const inputSearch = document.querySelector('input[data-search]');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('form input');
const toDoList = [];

const render = (toDoList) => {
    ul.textContent = '';
    toDoList.forEach((task, key) => {
        task.dataset.key = key;
        ul.appendChild(task);
    })
    taskNumber.textContent = toDoList.length;
}
const deleteTask = function (e) {
    toDoList.splice(e.target.parentNode.dataset.key, 1);
    render(toDoList);
}
const addTasks = function (e) {
    e.preventDefault();
    if (!input.value) return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = input.value + ' <button>delete</button>'
    toDoList.push(task);
    input.value = '';
    render(toDoList);
    task.querySelector('button').addEventListener('click', deleteTask);
}
const searchTask = () => {
    const matchTask = toDoList.filter((task) => task.textContent.toLowerCase().includes(inputSearch.value.toLowerCase()));
    render(matchTask);

}
form.addEventListener('submit', addTasks);
inputSearch.addEventListener('input', searchTask);