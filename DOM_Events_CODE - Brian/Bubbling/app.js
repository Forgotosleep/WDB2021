const container = document.querySelector('#container')
const button = document.querySelector('#changeColor')

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

button.addEventListener('click', (e) => {
    // container.style.backgroundColor = `${makeRandomColor()}` //This works too
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation();
})

container.addEventListener('click', () => {
    container.classList.toggle('hide')
})