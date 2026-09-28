// ==========================================
// S JOEL PORTFOLIO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const cards = document.querySelectorAll(
        ".glass-card, .section-title"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach((card) => {

        card.classList.add("hidden");

        observer.observe(card);

    });


    // ==========================================
    // PROFESSIONAL CURSOR PARTICLES
    // ==========================================

    let lastX = 0;
    let lastY = 0;

    document.addEventListener("mousemove", (event) => {

        const x = event.clientX;
        const y = event.clientY;

        // Controls particle density
        const distance = Math.hypot(
            x - lastX,
            y - lastY
        );

        // Don't generate too many particles
        if (distance < 28) {
            return;
        }

        lastX = x;
        lastY = y;

        createParticle(x, y);

    });


    function createParticle(x, y) {

        const particle =
            document.createElement("span");

        particle.className =
            "cursor-particle";


        // Small random starting position

        const offsetX =
            (Math.random() - 0.5) * 14;

        const offsetY =
            (Math.random() - 0.5) * 14;


        // Random movement after appearing

        const driftX =
            (Math.random() - 0.5) * 30;

        const driftY =
            (Math.random() - 0.5) * 30;


        particle.style.left =
            `${x + offsetX}px`;

        particle.style.top =
            `${y + offsetY}px`;


        // Red / blue particles

        particle.style.setProperty(
            "--particle-color",

            Math.random() > 0.5
                ? "#ff1744"
                : "#00b7ff"
        );


        particle.style.setProperty(
            "--random-x",
            `${driftX}px`
        );


        particle.style.setProperty(
            "--random-y",
            `${driftY}px`
        );


        document.body.appendChild(particle);


        // Remove particle after animation

        setTimeout(() => {

            particle.remove();

        }, 700);

    }
    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".navbar nav");

    const navigationLinks =
        document.querySelectorAll(".navbar nav a");


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");

            navigation.classList.toggle("active");

        });


        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                navigation.classList.remove("active");

            });

        });

    }
});