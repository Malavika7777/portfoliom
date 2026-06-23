// ===============================
// TYPING ANIMATION
// ===============================

const texts = [
    "AI & Data Analytics Enthusiast",
    "Machine Learning Developer",
    "Software Engineering Student",
    "Future AI Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    const typing = document.getElementById("typing");

    if (typing) {
        typing.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            const erase = setInterval(() => {

                letter = letter.slice(0, -1);

                if (typing) {
                    typing.textContent = letter;
                }

                if (letter.length === 0) {
                    clearInterval(erase);
                    count++;
                    index = 0;
                    setTimeout(type, 300);
                }

            }, 50);

        }, 1500);

    } else {
        setTimeout(type, 100);
    }

})();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".about-card,.timeline-item,.skill,.project,.highlight"
);

hiddenElements.forEach((el) => observer.observe(el));


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("🚀 Portfolio Loaded Successfully");