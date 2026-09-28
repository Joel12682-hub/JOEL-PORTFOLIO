/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* ==========================================
   CURSOR BRIGHTNESS GRADIENT
========================================== */

const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    document.body.classList.add("cursor-active");

});


function animateCursorGlow() {

    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;

    if (cursorGlow) {

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

    }

    requestAnimationFrame(animateCursorGlow);

}

animateCursorGlow();


document.addEventListener("mouseleave", () => {

    document.body.classList.remove("cursor-active");

});


/* ==========================================
   PROFESSIONAL CLICK SPARKS
========================================== */

const sparkContainer =
    document.getElementById("spark-container");


document.addEventListener("click", (event) => {

    if (!sparkContainer) return;


    const sparkCount = 8;


    for (let i = 0; i < sparkCount; i++) {

        const spark =
            document.createElement("span");

        spark.className = "spark";


        const angle =
            (Math.PI * 2 * i) / sparkCount;


        const distance =
            22 + Math.random() * 25;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        spark.style.left =
            `${event.clientX}px`;


        spark.style.top =
            `${event.clientY}px`;


        spark.style.setProperty(
            "--x",
            `${x}px`
        );


        spark.style.setProperty(
            "--y",
            `${y}px`
        );


        sparkContainer.appendChild(spark);


        setTimeout(() => {

            spark.remove();

        }, 700);

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {

    observer.observe(section);

});