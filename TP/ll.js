function revelToSpan() {
    document.querySelectorAll(".revel").forEach(function(element) {
        // Create span tags
        let parent = document.createElement("span");
        let child = document.createElement("span");

        // Add classes
        parent.classList.add("parent");
        child.classList.add("child");

        // Set inner HTML
        child.innerHTML = element.innerHTML; // Old content to child

        // Append child to parent
        parent.appendChild(child);

        element.innerHTML = ""; // Clear old content
        element.appendChild(parent); // Append parent to element
    });
}

function loaderAnnimation() {
    var tl = gsap.timeline();

    tl
    .from(".child span", {
        x: 100,
        delay: 1,
        stagger: .2,
        duration: 2,
        ease: "power3.inOut"
    })
    .to(".parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut,
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut,
    })
    .to("#yellow", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -.5,
        ease: Circ.easeInOut,
    })
    .to("#yellow", {
        height: "0%",
        top: 0,
        duration: 0.5,
        ease: Circ.easeInOut,
    })
    .to("#home", { // Show the home section after loader animation
        display: "block", // Change to block to make it visible
        duration: 0, // No duration for instant display
    });
}

revelToSpan();
loaderAnnimation();
