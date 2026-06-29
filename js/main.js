// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that we want to animate
    const sections = document.querySelectorAll("section");

    // Configure the observer
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: "0px",
        threshold: 0.15 // trigger when 15% of the section is visible
    };

    // Create the observer
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible classes when scrolled into view
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
                
                // Stop observing once it has faded in once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial hidden states and attach the observer
    sections.forEach(section => {
        // Tailwind classes for smooth transition
        section.classList.add("transition-all", "duration-1000", "ease-out", "opacity-0", "translate-y-10");
        sectionObserver.observe(section);
    });
});