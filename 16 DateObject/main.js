let startDate;
let endDate;
let setIntervalIndex;
const div = document.querySelector('.time div');

function timer(e) {
    if (this.textContent == 'Start') {
        startDate = new Date().getTime();
        this.textContent = 'Zatrzymaj';
        setIntervalIndex = setInterval(function () {
            endDate = new Date().getTime();
            const time = endDate - startDate;
            let sec = (time / 1000).toFixed(2);
            div.textContent = sec;
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
});