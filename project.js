const apikey = 'aff95e9d2bbf4218ac88b065341d5c04';

const blogcontainer = document.getElementById("blog-container");

async function fetchrandomnews(){
    try {
        const apiurl = `https://newsapi.org/v2/top-headlines?country=us&pagesize=12&apiKey=${apikey}`;
        const response = await fetch (apiurl);
        const data = await response.json();
        return data.articles;

        
    } catch (error) {
        console.error("Error fetching random news:", error);
        return[]
    }

}
function displayBlogs(articles) {
    blogcontainer.innerHTML = ""; // Clear previous content
    articles.forEach(article => {
        const blogCard = document.createElement("div");
        blogcard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage || "default-image.jpg"; // Fallback image if no image is available
        img.alt = "Blog Image";

        const title = document.createElement("h2");
        title.textContent = article.title;

        const blogDescription = document.createElement("p");
        blogDescription.textContent = article.description || "No description available.";


        blogcard.appendChild(img);
        blogCard.appendChild(title);
        blogcard.appendChild(blogDescription);
        

        blogcontainer.appendChild(blogCard);
    });

}

(async () => {
    try {
        const articles = await fetchrandomnews();
        displayBlogs(articles);

        
    } catch (error) {
        console.error("Error in anonymous function:", error);
        
    }
})();
