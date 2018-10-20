function timer(timeStart = 0) {
    let time = timeStart;
    return () => {
        document.body.textContent = `Czas na stronie: ${++time} sekund`
    }
}
const pageTimer = timer();
setInterval(pageTimer, 1000);