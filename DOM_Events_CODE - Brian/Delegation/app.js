const tweetForm = document.querySelector("#tweetForm")
const tweetContainer = document.querySelector('ul')

tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = "";
    tweetInput.value = "";
} )

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    

    bTag.append(username);
    newTweet.append(bTag)
    newTweet.append(` - ${tweet}`)
    tweetContainer.append(newTweet)
}


// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', (e) => {
//         li.remove()
//     })
// }
// This works for existing 'li's, not the added ones

tweetContainer.addEventListener('click', (e) => {
    // console.log('Click on UL');
    // console.log(e);
    // e.target.remove() 
    e.target.nodeName === 'LI' && e.target.remove() 
})