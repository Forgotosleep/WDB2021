const tweetForm = document.querySelector("#tweetForm")

// tweetForm.addEventListener('submit', (e) => {
//     alert("SUBMITTED!")
// } )



tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = "";
    tweetInput.value = "";

    // const newTweet = document.createElement('li');
    // const bTag = document.createElement('b');
    // const tweetContainer = document.querySelector('ul')

    // bTag.append(username);
    // newTweet.append(bTag)
    // newTweet.append(` - ${tweet}`)
    // tweetContainer.append(newTweet)

    // console.log(newTweet);
    
    

    // var userNameVal = document.querySelector('#username').value;
    // var tweetVal = document.querySelector('#tweet').value;

    // console.log(tweetForm.elements.username.value);
    // console.log(tweetForm.elements.tweet.value);
    

    // console.log(userNameVal);
    // console.log(tweetVal);
    
} )

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    const tweetContainer = document.querySelector('ul')

    bTag.append(username);
    newTweet.append(bTag)
    newTweet.append(` - ${tweet}`)
    tweetContainer.append(newTweet)
}
