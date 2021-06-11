// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const baseLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
// const newImg = document.createElement('img')
// const test = document.createElement('b')
// test.append('TEST')

// newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// container.appendChild(newImg)

// container.appendChild(test)

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const order = document.createElement('span')
    order.innerText = `#${i}`
    const newImg = document.createElement('img')
    newImg.src = `${baseLink}${i}.png`

    pokemon.appendChild(newImg)
    pokemon.appendChild(order)
    container.appendChild(pokemon)
}
