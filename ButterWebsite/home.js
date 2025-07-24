function revelToSpan(){
    document.querySelectorAll(".revel")
    .forEach(function(element) {
    // span tag banya hai 
    let parent= document.createElement("span");
    let child= document.createElement("span");

    // name de do class ko
    parent.classList.add("parent");
    child.classList.add("child");

    // child ke andar purana content daal do
    child.innerHTML = element.innerHTML; // purana content child ke andar daal do

    // parent ke andar child ko append kar do
    parent.appendChild(child);

    element.innerHTML = ""; // purana content hata do
    element.appendChild(parent); // parent ko element ke andar append kar do

})
}
function loaderAnnimation(){
    var tl = gsap.timeline();

tl
.from(".child span", {
    x: 100,
    delay: 1,
    stagger: .2,
    duration: 2,
    ease:"power3.inOut"
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
});

}
revelToSpan();
loaderAnnimation();

