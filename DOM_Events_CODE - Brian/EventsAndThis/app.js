function randomNum(max) {
    const number = Math.floor(Math.random() * (max + 1))
    return number
}

function randomRGB() {
    const rgb1 = randomNum(255)
    const rgb2 = randomNum(255)
    const rgb3 = randomNum(255)
    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}

const buttons = document.querySelectorAll('button')

// for(let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = randomRGB();
//         button.style.color = randomRGB()
//     });
// }

for(let button of buttons) {
    button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1')

// for (let h1 of h1s) {
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = randomRGB()
//         h1.style.color = randomRGB()
//     });
// }

for (let h1 of h1s) {
    h1.addEventListener('click', colorize
    );
}

function colorize() {
    this.style.backgroundColor = randomRGB()
    this.style.color = randomRGB()
    }


