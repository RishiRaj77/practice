   const users = [
      {
        naam: "Aarav Mehta",
        occupation: "Frontend Developer",
        bio: "Loves crafting beautiful interfaces and seamless UX.",
        profilePic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60"
      },
      {
        naam: "Riya Sharma",
        occupation: "UI Designer",
        bio: "Designs clean, intuitive user interfaces.",
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60"
      },
      {
        naam: "Kabir Singh",
        occupation: "Data Analyst",
        bio: "Analyzing data to drive business decisions.",
        profilePic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60"
      },
      {
        naam: "Dev Arora",
        occupation: "Full Stack Developer",
        bio: "Loves building complete apps from frontend to backend.",
        profilePic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60"
      },
      {
  naam: "Neha Verma",
  occupation: "Machine Learning Engineer",
  bio: "Builds smart systems using data and algorithms.",
  profilePic: "https://images.unsplash.com/photo-1700234272458-cdad09b6b7ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
{
    
  naam: "Yash Kapoor",
  occupation: "Cybersecurity Expert",
  bio: "Protects systems from digital threats and vulnerabilities.",
  profilePic: "https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
{
  naam: "Ananya Iyer",
  occupation: "Product Manager",
  bio: "Connects business goals with user needs and tech teams.",
  profilePic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60"
},
{
  naam: "Devansh Rao",
  occupation: "DevOps Engineer",
  bio: "Automates deployment and ensures systems run smoothly.",
  profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60"
}

    ];

    const searchBar = document.querySelector(".search-bar");
    const cardContainer = document.getElementById("card-container");

    function createCard(user) {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = user.profilePic;
      img.alt = "Profile Picture";

      const naam = document.createElement("h1");
      naam.textContent = user.naam;

      const occupation = document.createElement("h3");
      occupation.textContent = user.occupation;

      const bio = document.createElement("p");
      bio.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(naam);
      card.appendChild(occupation);
      card.appendChild(bio);

      return card;
    }

    function renderCards(data) {
      cardContainer.innerHTML = "";
      if (data.length === 0) {
        cardContainer.innerHTML = "<p>No users found.</p>";
        return;
      }
      data.forEach(user => {
        const card = createCard(user);
        cardContainer.appendChild(card);
      });
    }

    // Initial display
    renderCards(users);

    // Real-time search
    searchBar.addEventListener("input", () => {
      const searchText = searchBar.value.toLowerCase();
      const filtered = users.filter(user =>
        user.naam.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText) ||
        user.bio.toLowerCase().includes(searchText)
      );
      renderCards(filtered);
    });