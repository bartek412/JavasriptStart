const chars = 'ABCDEFGIJK0123456789';
const btn = document.querySelector('button');
const section = document.querySelector('section');
const codesNumber = 1000;
const charsNumber = 12;
console.log("xd");
btn.addEventListener("click", () => {
    for (let i = 0; i < codesNumber; i++) {
        let password = "";
        const div = document.createElement('div');
        for (let i = 0; i < charsNumber; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }
        div.textContent = password;
        section.appendChild(div);
    }

})