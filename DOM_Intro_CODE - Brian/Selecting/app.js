// const allImages = document.getElementsByTagName('img'); 

// for (let img of allImages) {
//     console.log(img);
// }

// for (let img of allImages) {
//     img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// const result = document.querySelector('img:nth-of-type(2)')

// const result = document.querySelector('a[title="Java"]')

const links = document.querySelectorAll('p a')
for (let link of links) {
    console.log(link.href);
}

const checkbox = document.queryselector('input[type="checkbox"]');
// <input type="checkbox" id="scales" name="scales" checked>