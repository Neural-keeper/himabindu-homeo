// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             document.querySelectorAll(".animated")[0].classList.add("fadeInLeft")
//             document.querySelectorAll(".animated")[1].classList.add("fadeInRight")
//         }
//     })
// })

// observer.observe(document.querySelector(".container"));

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'fade-section' class
    const fadeSections = document.querySelectorAll('.fade-section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    // The function that runs when an observed element enters the view
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If intersecting, add the 'is-visible' class
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has animated in
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each fade section
    fadeSections.forEach(section => {
        observer.observe(section);
    });
});
