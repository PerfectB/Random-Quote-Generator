/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
      quote: "No one can make you feel inferior without your consent.",
      source: "Eleanor Roosevelt",
      citation: "This is My Story",
      year: "1939",
      tag: "Confidence"
  },

  {
      quote: "Love is like the wind, you can't see it but you can feel it.",
      source: "Nicholas Sparks",
      citation: "A Walk to Remember",
      year: "1999",
      tag: "Love"
  },

  {
      quote: "I'd rather regret the things I've done than regret the things I haven't done.",
      source: "Lucille Ball",
      citation: "",
      year: "",
      tag: "Wisdom"
  },

  {
      quote: "Failure will never overtake me if my determination to succeed is strong enough",
      source: "Og Mandino",
      citation: "",
      year: "",
      tag: "Motivational"
  },
  
  {
      quote: "Happiness is the greatest hiding place for despair.",
      source: "Søren Kierkegaard",
      citation: "",
      year: "",
      tag: "Fighting-spirit"
  },

  {
      quote: "Maybe you have to know the darkness before you can appreciate the light.",
      source: "Madeleine L'Engle",
      citation: "A Ring of Endless Light",
      year: "1980",
      tag: "Moral"
      
  },
  {
      quote: "The phoenix must burn to emerge.",
      source: "Janet Fitch",
      citation: "White Oleander",
      year: "1999",
      tag: ""
  },

  {
      quote: "You don't need anybody to tell you who you are or what you are. You are what you are!",
      source: "John Lennon",
      citation: "",
      year: "",
      tag: "Be-Yourself"
    
  },
  
  {
      quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
      source: "J.K.Rowling",
      citation: "Harry Potter and the Prisoner of Azkaban",
      year: "1999",
      tag: "Hope"
  },
  
  
  {
      quote: "Before you can see the Light, you have to deal with the darkness.",
      source: "Dan Millman",
      citation: "Sacred Journey of the Peaceful Warrior",
      year: "1991",
      tag: "Inspirational, Wisdom"
    
  },
  
  {
      quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      source: "Patrick McKenzie",
      citation: "Twitter",
      year: "2016",
      tag: "Motivational"
  }
  
];


/***
 * `getRandomQuote` function
***/
let getResult;

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  getResult = quotes[randomNumber];
  return getResult;
}


function makeRandomColor(){
  let r = Math.floor( Math.random() * 256 );
  let g = Math.floor( Math.random() * 256 );
  let b = Math.floor( Math.random() * 256 );
  let finalColor = 'rgb(' + r + ',' + g + ',' + b +')';
  return finalColor;
}

/*Another way to generate the random Color

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
*/


/*Random Font Style????*/

let fontLists = ["Helvetica","sans serifs","Arial","Verdana", "Times New Roman", "Calibri", "Garamond"];
let styleFont = "";

function makeRandomFontStyle(){
  for (k = 0; k < fontLists.length; k++){
    styleFont = fontLists[Math.floor(Math.random() * fontLists.length)];
  }
  return styleFont;
}

/***
 * `printQuote` function
***/

function printQuote(){
  let getQuote = getRandomQuote();
  let messageOutcome = ""; //begin with an empty string
  messageOutcome += '<p class="quote">' + getQuote.quote + "</p>"; //Take a look at the index.html. Make this task exactly like the p tag in index.html
  messageOutcome += '<p class="source">' + getQuote.source;

  if (getQuote.citation) {
    messageOutcome += "<span class = 'citation'>" + getQuote.citation + "</span>";
  }
  
  if (getQuote.year) {
    messageOutcome += "<span class = 'year'>" + getQuote.year + "</span>";
  }
  
  if (getQuote.tag) {
    messageOutcome += "<span class = 'tag'>" + getQuote.tag + "</span>";
  }
  
  messageOutcome += "</p>";
  
  let outputDiv = document.getElementById("quote-box"); //Declar a variable. Assign that variable with DOM (document.getElementById)
  outputDiv.innerHTML = messageOutcome //change the the whole paragraph that has ID "quote-box" into messageOutcome. The messageOutcome is a composition of quotes, source, citation, years, and tag
  document.body.style.backgroundColor = makeRandomColor();
  document.body.style.color = makeRandomColor();
  document.body.style.fontFamily = makeRandomFontStyle();
} 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 5000);