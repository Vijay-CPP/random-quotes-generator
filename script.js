let quote = document.querySelector(".quote")
let author = document.querySelector(".author")
let btn = document.querySelector(".btn")

let err = document.querySelector(".err")


async function displayQuote() {

    try {
        btn.textContent = "Loading..."

        let response = await fetch("https://api.quotable.io/quotes/random");
        let data = await response.json();
        let quoteData = data[0];

        quote.textContent = quoteData.content;
        author.textContent = quoteData.author;

        btn.textContent = "Generate"
    } catch (error) {
        err.textContent = error.message;
    }

}

displayQuote()

btn.addEventListener("click", displayQuote)
