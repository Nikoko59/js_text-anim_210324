const text = document.getElementById("target");
let wordIndex = 0;
let letterIndex = 0;
// console.log(text);

let array = ["Développeur", "Créateur", "HardWorker"];
console.log(array);

const createLetter = () => {
  const letter = document.createElement("span");
  text.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2600);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};

loop();
