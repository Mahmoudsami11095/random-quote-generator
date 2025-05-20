// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a new quote
function displayNewQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
}

// Event listener for the new quote button
newQuoteBtn.addEventListener('click', displayNewQuote);

// Display a quote when the page loads
document.addEventListener('DOMContentLoaded', displayNewQuote);
