const apikey = 'aff95e9d2bbf4218ac88b065341d5c04';

const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news:", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = ""; // Clear previous content
    articles.forEach(article => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage || "default-image.jpg"; // Fallback image if no image is available
        img.alt = "Blog Image";

        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = truncatedTitle;

        const blogDescription = document.createElement("p");
        const truncatedDescription = article.description && article.description.length > 100 ? article.description.slice(0, 100) + "..." : article.description;
        blogDescription.textContent = truncatedDescription || "No description available.";

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(blogDescription);

        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });

        blogContainer.appendChild(blogCard);
    });
}

searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if (query) {
        try {
            const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=popularity&language=en&pageSize=12&apiKey=${apikey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayBlogs(data.articles);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    } else {
        alert("Please enter a search term.");
    }
});

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error in anonymous function:", error);
    }
})();
