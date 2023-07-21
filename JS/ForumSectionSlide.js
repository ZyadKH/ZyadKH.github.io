// JavaScript code for smooth scrolling to the target section
document.getElementById("forum-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const targetSection = document.getElementById("stats-section");
    const offsetTop = targetSection.getBoundingClientRect().top;
    const headerHeight = document.querySelector("header").offsetHeight;
    const scrollOptions = {
        top: offsetTop + window.scrollY - headerHeight,
        behavior: "smooth"
    };

    window.scroll(scrollOptions);
});
