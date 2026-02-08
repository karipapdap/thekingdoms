// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

function showOnScroll() {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
