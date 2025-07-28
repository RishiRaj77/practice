function revelToSpan() {
    document.querySelectorAll(".revel")
        .forEach(function (element) {
            let parent = document.createElement("span");
            let child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = element.innerHTML;
            parent.appendChild(child);

            element.innerHTML = "";
            element.appendChild(parent);
        });
}

function loaderAnnimation() {
    var tl = gsap.timeline();

    tl.from(".child span", {
        x: 100,
        delay: 1,
        stagger: 0.2,
        duration: 2,
        ease: "power3.inOut"
    })
    .to(".parent .child", {
        y: "-100%",
        duration: 1,
        ease: "circ.inOut"
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: "circ.inOut"
    })
    .to("#yellow", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -0.5,
        ease: "circ.inOut"
    })
    .to("#yellow", {
        height: "0%",
        top: 0,
        duration: 0.5,
        ease: "circ.inOut"
    })
    .to("#home, #nav", {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        onStart: function () {
            document.querySelector("#home").style.pointerEvents = "auto";
            document.querySelector("#nav").style.pointerEvents = "auto";
        }
    });
}

// ✅ Wait until page fully loads before running animation
window.addEventListener("load", function () {
    revelToSpan();
    loaderAnnimation();
});
