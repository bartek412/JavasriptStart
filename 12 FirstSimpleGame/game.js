const imgs = document.querySelectorAll('.select img');
const spansLeftPanel = document.querySelectorAll('.panel-left span')
let userChoice = "";
const elementsOfGame = ["papier", "kamień", "nożyczki"]
let win = 0;
let loss = 0;
let draw = 0;
let games = 0;

function CleanUserChoice() {
    imgs.forEach((item) => {
        item.style.boxShadow = '0 0 0 0 yellow';
        userChoice = '';
    })
}
imgs.forEach(function (img) {
    img.addEventListener('click', function () {
        CleanUserChoice();
        img.style.boxShadow = '0 0 2px 4px yellow';
        userChoice = img.dataset.option;
    })
});
document.querySelector('.start').addEventListener('click', () => {
    if (!userChoice) alert('Wybierz dłoń')
    let whoWin;
    let computerChoice = elementsOfGame[Math.floor(Math.random() * elementsOfGame.length)];
    if (userChoice == computerChoice) {
        draw++;
        whoWin = 'Remis';
    } else {
        switch (userChoice) {
            case 'papier':
                if (computerChoice == 'kamień') {
                    win++;
                    whoWin = 'Ty';
                } else {
                    loss++;
                    whoWin = 'Komputer :(';
                }
                break;
            case 'kamień':
                if (computerChoice == 'nożyczki') {
                    win++;
                    whoWin = 'Ty';
                } else {
                    loss++;
                    whoWin = 'Komputer :(';
                }
                break;
            default:
                if (computerChoice == 'papier') {
                    win++;
                    whoWin = 'Ty';
                } else {
                    loss++;
                    whoWin = 'Komputer :(';
                }
                break;


        }
    }
    games++;
    spansLeftPanel.forEach(span => {

        if (span.dataset.summary == "your-choice") span.textContent = userChoice;
        else if (span.dataset.summary == "ai-choice") span.textContent = computerChoice;
        else span.textContent = whoWin;

    })
    CleanUserChoice();
    document.querySelector('.numbers span').textContent = games;
    document.querySelector('.wins span').textContent = win;
    document.querySelector('.losses span').textContent = loss;
    document.querySelector('.draws span').textContent = draw;
})