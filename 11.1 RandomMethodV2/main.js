const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];
btn.addEventListener("click", () => {
    const nameIndex = Math.floor(Math.random() * names.length);
    const prefixIndex = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[prefixIndex]} ,że najlepsze będzie ${names[nameIndex]}`;
})