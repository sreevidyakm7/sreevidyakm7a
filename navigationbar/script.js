// Change navbar background when scrolling
window.addEventListener("section", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("section");
    } else {
        navbar.classList.remove("section");
    }
});
