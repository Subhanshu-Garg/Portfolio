const animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // element is in the viewport
            entry.target.classList.add(`${entry.target.id}`)
        } else {
          // element is not in the viewport
          entry.target.classList.remove(`${entry.target.id}`)
        }
    });
    
});

animation.forEach((element) => {
    observer.observe(element)
})

/////////////////carousel//////////////////////////////

const carousel = document.querySelector('#carousel');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

const carouselItems = Array.from(carousel.querySelectorAll('.carousel-item'));


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
        item.style.display = 'block';
        } else {
        item.style.display = 'none';
        }
    });
    });

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) 
        item.style.display = 'block';
    });
});

const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
} )
