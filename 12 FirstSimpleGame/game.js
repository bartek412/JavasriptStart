const imgs = document.querySelectorAll('.select img');
const spansLeftPanel = document.querySelectorAll('.panel-left span')
const gameSummary = {
    wins: 0,
    losses: 0,
    draws: 0,
    PublishResult: function (result) {
        if (result === 'draw') {
            gameSummary.draws++;
            game.whoWin = 'Remis';
        } else if (result === 'win') {
            gameSummary.wins++;
            game.whoWin = 'Ty';
        } else {
            gameSummary.losses++;
            game.whoWin = 'Komputer :(';
        }
        spansLeftPanel.forEach(span => {

            if (span.dataset.summary == "your-choice") span.textContent = game.userChoice;
            else if (span.dataset.summary == "ai-choice") span.textContent = game.computerChoice;
            else span.textContent = game.whoWin;

        })
        document.querySelector('.numbers span').textContent = gameSummary.wins + gameSummary.losses + gameSummary.draws;
        document.querySelector('.wins span').textContent = gameSummary.wins;
        document.querySelector('.losses span').textContent = gameSummary.losses;
        document.querySelector('.draws span').textContent = gameSummary.draws;
    }
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
const CheckResult = function (player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return 'win';
    } else {
        return 'loss';
    }
}
imgs.forEach(function (img) {
    img.addEventListener('click', function () {
        CleanUserChoice();
        this.style.boxShadow = '0 0 2px 4px yellow';
        game.userChoice = this.dataset.option;
    })
});
document.querySelector('.start').addEventListener('click', () => {
    if (!game.userChoice) return alert('Wybierz dłoń');
    game.computerChoice = imgs[Math.floor(Math.random() * imgs.length)].dataset.option;
    const gameResult = CheckResult(game.userChoice, game.computerChoice)
    gameSummary.PublishResult(gameResult);
    CleanUserChoice();
})