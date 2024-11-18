

var quotes = [
    "Be yourself; everyone else is already taken.",
    
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Without music, life would be a mistake.",

    "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You only live once, but if you do it right, once is enough.",
    "If you tell the truth, you don't have to remember anything.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that Martin Luther King Jr."


];

function generateQuote() {
    var randomCoute = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomCoute ];
}