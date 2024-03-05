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

const myName = 'Subhanshu';
const designation = "Software Developer";
const introElement = document.querySelector('#intro');
async function typeOutText(text, element, delay = 100) {
    introElement.innerHTML = '|'
    for (const ch of text) {
        await new Promise(resolve => setTimeout(resolve, delay));
        element.innerHTML = element.innerText.slice(0, -1)
        element.innerHTML += `${ch}|`;
    }
}
async function deleteText(element, delay = 100) {
    const text = element.innerText;
    for (let i = text.length; i > 0; i--) {
        await new Promise(resolve => setTimeout(resolve, delay));
        element.innerText = element.innerText.slice(0, -2) + '|';
    }
}

async function typeAnimation() {
    await typeOutText(myName, introElement, 100);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await deleteText(introElement, 50);
    await new Promise(resolve => setTimeout(resolve, 500));
    await typeOutText(designation, introElement, 100);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await deleteText(introElement, 50);
    await new Promise(resolve => setTimeout(resolve, 500));
    typeAnimation(); 
}

typeAnimation();

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
