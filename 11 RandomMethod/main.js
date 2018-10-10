let LifeSentences = [];
const h1 = document.querySelector('h1');
document.querySelector('.add').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    let newSentence = input.value;
    if (newSentence) {
        for (sentence of LifeSentences) {
            if (sentence === newSentence) return;
        }
        LifeSentences.push(newSentence);
        alert(`dodales do listy: ${newSentence}`);
    }
    input.value = "";

});
document.querySelector('.showAdvice').addEventListener('click', () => {
    h1.textContent = LifeSentences[Math.floor(Math.random() * LifeSentences.length)];
})
document.querySelector('.showOptions').addEventListener('click', () => {
    alert("Twoje porady to: " + LifeSentences);
})