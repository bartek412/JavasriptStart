const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector('div');

const showMessage = (e) => {
    div.textContent = "";
    passwords.forEach((password, index) => {
        if (e.target.value.toLowerCase() === password.toLowerCase()) {
            div.textContent = messages[index]
        }
    })
}
input.addEventListener("input", showMessage);
input.addEventListener("focus", showMessage);
input.addEventListener("input", showMessage);