const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ['jedEN', 'DwA', 'tRzY'];
const messages = ["wyjechałam na zawsze", "piękna pora roku", "Fajny styl masz"];
const LowerCasePasswords = passwords.map(password => password.toLowerCase())

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value.toLowerCase();
    LowerCasePasswords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})
input.addEventListener('focus', () => {
    input.classList.add('active');
})
input.addEventListener('blur', () => {
    input.classList.remove('active');
})