const imgs = document.querySelectorAll('.select img');
const spansLeftPanel = document.querySelectorAll('.panel-left span')
const gameSummary = {
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    userChoice: "",
    computerChoice: "",
    whoWin: "",
}

function CleanUserChoice() {
    imgs.forEach((item) => {
        item.style.boxShadow = '';
        game.userChoice = '';
    })
}
imgs.forEach(function (img) {
    img.addEventListener('click', function () {
        CleanUserChoice();
        img.style.boxShadow = '0 0 2px 4px yellow';
        game.userChoice = img.dataset.option;
    })
});
document.querySelector('.start').addEventListener('click', () => {
    if (!game.userChoice) return alert('Wybierz dłoń');
    game.computerChoice = imgs[Math.floor(Math.random() * imgs.length)].dataset.option;
    if (game.userChoice == game.computerChoice) {
        gameSummary.draws++;
        game.whoWin = 'Remis';
    } else {
        switch (game.userChoice) {
            case 'papier':
                if (game.computerChoice == 'kamień') {
                    gameSummary.wins++;
                    game.whoWin = 'Ty';
                } else {
                    gameSummary.losses++;
                    game.whoWin = 'Komputer :(';
                }
                break;
            case 'kamień':
                if (game.computerChoice == 'nożyczki') {
                    gameSummary.wins++;
                    game.whoWin = 'Ty';
                } else {
                    gameSummary.losses++;
                    game.whoWin = 'Komputer :(';
                }
                break;
            default:
                if (game.computerChoice == 'papier') {
                    gameSummary.wins++;
                    game.whoWin = 'Ty';
                } else {
                    gameSummary.losses++;
                    game.whoWin = 'Komputer :(';
                }
                break;


        }
    }
    spansLeftPanel.forEach(span => {

        if (span.dataset.summary == "your-choice") span.textContent = game.userChoice;
        else if (span.dataset.summary == "ai-choice") span.textContent = game.computerChoice;
        else span.textContent = game.whoWin;

    })
    CleanUserChoice();
    document.querySelector('.numbers span').textContent = gameSummary.wins + gameSummary.losses + gameSummary.draws;
    document.querySelector('.wins span').textContent = gameSummary.wins;
    document.querySelector('.losses span').textContent = gameSummary.losses;
    document.querySelector('.draws span').textContent = gameSummary.draws;
})