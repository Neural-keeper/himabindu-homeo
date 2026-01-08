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

const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  update();
});

prev.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  update();
});

/* Optional auto-play */
setInterval(() => {
  index = (index + 1) % cards.length;
  update();
}, 6000);
