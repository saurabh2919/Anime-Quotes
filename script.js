const quotes = [
    {
        text: "As long as you are alive, there are infinite chances.",
        character: "Monkey D. Luffy",
        anime: "One Piece",
        image: "./Images/Monkey D luffy.jpg"
    },
    {
        text: "Power comes in response to a need, not a desire.",
        character: "Goku",
        anime: "Dragon Ball Z",
        image: "./Images/goku.jpg"
    },
    {
        text: "Hard work is worthless for those that don’t believe in themselves.",
        character: "Naruto Uzumaki",
        anime: "Naruto",
        image: "./Images/naruto.jpg"
    },
    {
        text: "Growth occurs when one goes beyond one’s limits. Realizing that is also part of training.",
        character: "Itachi Uchiha",
        anime: "Naruto",
        image: "./Images/Itachi.jpeg"
    },
    {
        text: "No One is Born Into This World to Be Alone.",
        character: "Saul D. Jaguar",
        anime: "One Piece",
        image: "./Images/Jaguar D saul.jpg"
    }
];

let currentIndex = 0; // Keeps track of the current quote index

const quoteText = document.getElementById("quote-text");
const characterName = document.getElementById("character-name");
const animeName = document.getElementById("anime-name");
const animeImage = document.getElementById("anime-image");
const newQuoteButton = document.getElementById("new-quote");

function generateNextQuote() {
    let selectedQuote = quotes[currentIndex];

    quoteText.textContent = `"${selectedQuote.text}"`;
    characterName.textContent = `- ${selectedQuote.character}`;
    animeName.textContent = `Anime - ${selectedQuote.anime}`;
    animeImage.src = selectedQuote.image;

    // Move to the next quote, and loop back to the first one if at the end
    currentIndex = (currentIndex + 1) % quotes.length;
}

newQuoteButton.addEventListener("click", generateNextQuote);

// Show the first quote when the page loads
generateNextQuote();
