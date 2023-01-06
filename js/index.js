const glassemoji = document.querySelector('#glassemoji');
const hCrown = document.querySelector('#h-crown');
const hThumbup = document.querySelector('#h-thumbup');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // element is in the viewport
            glassemoji.classList.add('glassemoji');
            hCrown.classList.add('h-crown');
            hThumbup.classList.add('h-thumbup');
        } else {
          // element is not in the viewport
            glassemoji.classList.remove('glassemoji');
            hCrown.classList.remove('h-crown');
            hThumbup.classList.remove('h-thumbup');
        }
    });
    
});

observer.observe(glassemoji);
observer.observe(hCrown);
observer.observe(hThumbup);

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
