const btn = document.querySelector("#v2");
const btn3 = document.querySelector("#v3")

btn.onclick = function () {
    console.log("Gasp! You clicketh I!");
}

// function test() {
//     console.log("Ooh, please doth clicketh I");
// }

// btn.onmouseenter = test;

// function scream() {
//     console.log("AAAAAHHHH!!");
// }

clicky = () => {alert('A-click!')}

btn.onclick = clicky;

btn3.addEventListener('click', () => {alert('Congratulations, you won something really awesome and not impossible or suspicous at all!');})

btn3.addEventListener('mousedown', () => {alert('Click me again!')})


twist = () => {
    console.log("TWIST!");
}

shout = () => {
    console.log("SHOUT!");
}

const btn4 = document.querySelector('#v4')

// btn4.onclick = twist;
// btn4.onclick = shout;

btn4.addEventListener('click', twist, {once: true})
btn4.addEventListener('click', shout)