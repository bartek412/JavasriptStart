let alfa = 40;

document.body.style.backgroundColor = `rgba(0, 0, 0, ${alfa/100})`;

const changeColor = (e) => {
  switch (e.keyCode) {
    case 38: //- strzałka do góry
      if (alfa > 0)
        alfa--;
      break;
    case 40: //- strzalka w dół
      if (alfa < 100)
        alfa++;
      break;
  }
  // console.log(alfa);
  document.body.style.backgroundColor = `rgba(0, 0, 0, ${alfa/100})`;
}

window.addEventListener('keydown', changeColor)