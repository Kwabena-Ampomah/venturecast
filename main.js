gsap.registerPlugin(ScrollTrigger);


gsap.timeline()
    .from(".homescreen h1", {
        opacity: 0,
        scale: 0.5,
        y: -100,
        duration: 1.5,
        ease: "power3.out",
    })
    .to(".homescreen h1", {
        color: "#1e1e1e",
        duration: 1,
        ease: "power3.out",
        repeat: -1,
        yoyo: true
    });


const homescreen = document.querySelector('.homescreen');
for (let i = 0; i <= 900; i += 7) {
    const block = document.createElement('div');
    block.classList.add('block');
    homescreen.appendChild(block);
}


anime.set('.block', {
    translateX: () => anime.random(-200, 200),
    translateY: () => anime.random(-150, 150),
    scale: () => anime.random(0.5, 1.5),
    rotate: () => anime.random(-180, 180),
});

function animateBlocks() {
    anime({
        targets: '.block',
        translateX: () => anime.random(-700, 700),
        translateY: () => anime.random(-500, 500),
        scale: () => anime.random(1, 5),
        rotate: () => anime.random(-360, 360),
        easing: 'linear',
        duration: 5000,
        delay: anime.stagger(2),
        loop: true,
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) animateBlocks();
    });
}, { threshold: 0.5 });
observer.observe(homescreen);


gsap.fromTo(".jake-image", 
    { opacity: 0, scale: 0.8 },
    {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".jake-paul",
            start: "top center",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

gsap.fromTo(".jake-paul .description", 
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".jake-paul",
            start: "top center+=100",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

// Kai Cenat's image animation
gsap.fromTo(".kai-image", 
    { opacity: 0, scale: 0.8 },
    {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".kai-cenat",
            start: "top center",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

gsap.fromTo(".kai-cenat .description", 
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".kai-cenat",
            start: "top center+=100",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);
gsap.fromTo(".tom-image",  // Targeting only the image now
    { opacity: 0, scale: 0.8 },
    {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".tom-p", // Using .tom-p as the trigger, but only animating .tom-image
            start: "top center",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

// Tom P's description animation (if needed)
gsap.fromTo(".tom-p .description", 
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".tom-p",
            start: "top center+=100",
            end: "center center",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#jake-paul"]'); // Select the "About" link
    const jakePaulSection = document.querySelector('#jake-paul'); // Select the target section

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump
        jakePaulSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    });
});
