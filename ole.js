
let data;


window.onload = fetchData();

async function fetchData() {
    const response = await fetch("https://type.fit/api/quotes");
    data = await response.json(); 
    getNewQuote();
}


function getNewQuote(){
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomQuote = data[randomIndex].text;
    let randomauthor = data[randomIndex].author;
    document.getElementById('text').innerText = randomQuote;
    document.getElementById('author').innerText = randomauthor;
    let twtLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
    let twtMsg = data[randomIndex].text.replace(/\s/g,"%20");
    twtLink += twtMsg.replace(/^(.+)$/g, '"$1"');
    twtLink = twtLink +" - " +data[randomIndex].author.replace(/\s/g, '%20')
    document.getElementById('tweet-quote').href = twtLink;
}