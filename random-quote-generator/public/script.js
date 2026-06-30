const quotes = {

motivational: [
{ text:"Success is not final, failure is not fatal.", author:"Winston Churchill" },
{ text:"Dream big and dare to fail.", author:"Norman Vaughan" },
{ text:"Discipline beats motivation.", author:"Unknown" }
],

god: [
{ text:"With God all things are possible.", author:"Matthew 19:26" },
{ text:"Trust in the Lord with all your heart.", author:"Proverbs 3:5" },
{ text:"God's plan is always greater than our plans.", author:"Unknown" }
],

morning: [
{ text:"Every morning is a fresh beginning.", author:"Unknown" },
{ text:"Rise up, start fresh, see the bright opportunity.", author:"Unknown" },
{ text:"A beautiful day begins with a beautiful mindset.", author:"Unknown" }
],

study: [
{ text:"Learning never exhausts the mind.", author:"Leonardo da Vinci" },
{ text:"Study while others are sleeping.", author:"Unknown" },
{ text:"The expert in anything was once a beginner.", author:"Helen Hayes" }
],

programming: [
{ text:"First solve the problem. Then write the code.", author:"John Johnson" },
{ text:"Code is like humor. When you have to explain it, it's bad.", author:"Cory House" },
{ text:"Programs must be written for people to read.", author:"Harold Abelson" }
]

};

let currentCategory = "motivational";

function generateQuote() {

    const categoryQuotes = quotes[currentCategory];

    const randomIndex =
        Math.floor(Math.random() * categoryQuotes.length);

    document.getElementById("quote").innerText =
        categoryQuotes[randomIndex].text;

    document.getElementById("author").innerText =
        "- " + categoryQuotes[randomIndex].author;
}

function changeCategory(category){
    currentCategory = category;
    generateQuote();
}

document.getElementById("newQuoteBtn")
.addEventListener("click", generateQuote);

generateQuote();