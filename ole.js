
let data;
let response;
//let randomIndex;

window.onload = fetchData();

/*
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
*/

//let myData=[{ text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },  { text: "You can observe a lot just by watching.", author: "Yogi Berra" }, { text: "A house divided against itself cannot stand.", author: "Abraham Lincoln" }, { text: "Difficulties increase the nearer we get to the goal.", author: "Johann Wolfgang von Goethe" }]


async function fetchData() {
    response = await fetch("https://type.fit/api/quotes");
    data = await response.json(); 
    getNewQuote();
    return data;
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