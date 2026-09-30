/* =========================================================
   S JOEL — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVIGATION
    ========================= */

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");
    const sections = document.querySelectorAll("main section");


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const spans = menuToggle.querySelectorAll("span");

            if (navMenu.classList.contains("open")) {
                spans[0].style.transform = "translateY(3.5px) rotate(45deg)";
                spans[1].style.transform = "translateY(-3.5px) rotate(-45deg)";
            } else {
                spans[0].style.transform = "";
                spans[1].style.transform = "";
            }

        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navMenu) {
                navMenu.classList.remove("open");
            }

            if (menuToggle) {

                const spans = menuToggle.querySelectorAll("span");

                spans.forEach((span) => {
                    span.style.transform = "";
                });

            }

        });

    });


    /* =========================
       NAVBAR SCROLL
    ========================= */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    function updateActiveSection() {

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.35;

        let currentSection = "";

        sections.forEach((section) => {

            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (
                scrollPosition >= top &&
                scrollPosition < top + height
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
        passive: true
    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       CURSOR GLOW
       ===================================================== */

    const cursorGlow = document.createElement("div");

    cursorGlow.className = "cursor-glow";

    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    function animateCursor() {

        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        cursorGlow.style.transform =
            `translate3d(${glowX}px, ${glowY}px, 0)`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    /* =====================================================
       CLICK SPARKLES
       ===================================================== */

    document.addEventListener("click", (event) => {

        createSparkles(
            event.clientX,
            event.clientY
        );

    });


    function createSparkles(x, y) {

        const amount = 8;

        for (let i = 0; i < amount; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className = "click-sparkle";

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                18 + Math.random() * 28;

            const size =
                2 + Math.random() * 2;

            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;

            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            sparkle.style.setProperty(
                "--x",
                `${Math.cos(angle) * distance}px`
            );

            sparkle.style.setProperty(
                "--y",
                `${Math.sin(angle) * distance}px`
            );

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 600);

        }

    }


    /* =====================================================
       SUBTLE REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-header, " +
        ".about-grid, " +
        ".project-card, " +
        ".achievement-card, " +
        ".contact-intro, " +
        ".contact-links"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       ESCAPE — CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (navMenu) {
            navMenu.classList.remove("open");
        }

        if (menuToggle) {

            const spans =
                menuToggle.querySelectorAll("span");

            spans.forEach((span) => {
                span.style.transform = "";
            });

        }

    });

});
/* =================================
   CURSOR LIGHT
================================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}
/* =================================
   CLICK SPARKLES
================================= */

document.addEventListener("click", (event) => {

    const sparkleCount = 7;

    for (let i = 0; i < sparkleCount; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "click-sparkle";

        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 25 + Math.random() * 35;

        sparkle.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        sparkle.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }

});
/* =================================
   NAVIGATION SCROLL EFFECT
================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}