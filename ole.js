
let data;
let response;
let randomIndex;

window.onload = init;
function init () {
    fetchQuote();
}

async function fetchQuote() {
    response = await fetch("https://type.fit/api/quotes");
    data = await response.json();  
    randomIndex = Math.floor(Math.random() * data.length);
    document.getElementById('text').innerText = data[randomIndex].text;
    document.getElementById('author').innerText = data[randomIndex].author;
    let twtLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
    let twtMsg = data[randomIndex].text.replace(/\s/g,"%20");
    twtLink += twtMsg.replace(/^(.+)$/g, '"$1"');
    twtLink = twtLink +" - " +data[randomIndex].author.replace(/\s/g, '%20')
    document.getElementById('tweet-quote').href = twtLink;
    };




