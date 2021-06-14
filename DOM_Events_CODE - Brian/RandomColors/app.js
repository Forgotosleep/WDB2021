const h1 = document.querySelector('h1')
const button = document.querySelector('button')

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

// function changeBGColor() {
//     document.body.style.backgroundColor = `${randomRGB()}`
// }

button.addEventListener('click', () => {
    newColor = randomRGB()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor 
})

