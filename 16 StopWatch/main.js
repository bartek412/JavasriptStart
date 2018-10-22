let startTime = 0;
let setIntervalIndex;
const div = document.querySelector('.time div');

function timer() {
    if (this.textContent == 'Start') {
        this.textContent = 'Zatrzymaj';
        setIntervalIndex = setInterval(function () {
            startTime++;
            div.textContent = (startTime / 100).toFixed(2);
        }, 10)

    } else {
        clearInterval(setIntervalIndex);
        this.textContent = 'Start';
    }
}


document.querySelector('button.main').addEventListener('click', timer);
document.querySelector('button.reset').addEventListener('click', () => {
    div.textContent = '---';
    clearInterval(setIntervalIndex);
    document.querySelector('button.main').textContent = 'Start';
    startTime = 0;
});