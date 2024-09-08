function removeActiveClasses() {
  const links = document.querySelectorAll('.n-list > ul > li > a')
  links.forEach((link) => link.classList.remove('active'))
}

function setActiveLink() {
  let hash = window.location.hash
  hash = hash || '#home'
  removeActiveClasses()
  const activeLink = document.querySelector(
    `.n-list > ul > li > a[href="${hash}"]`
  )
  if (activeLink) {
    activeLink.classList.add('active')
  }
}

window.addEventListener('load', setActiveLink)
window.addEventListener('hashchange', setActiveLink)

const darkModeToggle = document.querySelector('#darkmode-toggle')
let enableDarkMode = false
window.addEventListener('load', () => {
  const currentHour = new Date().getHours()
  if (currentHour >= 7 && currentHour < 19) {
    return
  }
  darkModeToggle.checked = true
  enableDarkMode = true
  document.body.classList.add('dark-mode')
})
darkModeToggle.addEventListener('click', () => {
  enableDarkMode = !enableDarkMode
  if (enableDarkMode) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
})

const animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1
      // element is in the viewport
      entry.target.classList.add(`${entry.target.id}`)
    } else {
      entry.target.style.opacity = 0
      // element is not in the viewport
      entry.target.classList.remove(`${entry.target.id}`)
    }
  })
})

animation.forEach((element) => {
  observer.observe(element)
})

const myName = 'Subhanshu'
const designation = 'Programmer'
const introElement = document.querySelector('#intro')
async function typeOutText(text, element, delay = 100) {
  introElement.innerHTML = '|'
  for (const ch of text) {
    await new Promise((resolve) => setTimeout(resolve, delay))
    element.innerHTML = element.innerText.slice(0, -1)
    element.innerHTML += `${ch}|`
  }
}
async function deleteText(element, delay = 100) {
  const text = element.innerText
  for (let i = text.length; i > 0; i--) {
    await new Promise((resolve) => setTimeout(resolve, delay))
    element.innerText = element.innerText.slice(0, -2) + '|'
  }
}

async function typeAnimation() {
  await typeOutText(myName, introElement, 100)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await deleteText(introElement, 50)
  await new Promise((resolve) => setTimeout(resolve, 500))
  await typeOutText(designation, introElement, 100)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await deleteText(introElement, 50)
  await new Promise((resolve) => setTimeout(resolve, 500))
  typeAnimation()
}

typeAnimation()

/////////////////carousel//////////////////////////////

// const carousel = document.querySelector('#carousel');
// const prevButton = document.querySelector('#prev-button');
// const nextButton = document.querySelector('#next-button');

// const carouselItems = Array.from(carousel.querySelectorAll('.carousel-item'));

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//     carouselItems.forEach((item, index) => {
//         if (index === currentIndex) {
//         item.style.display = 'block';
//         } else {
//         item.style.display = 'none';
//         }
//     });
//     });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % carouselItems.length;
//     carouselItems.forEach((item, index) => {
//         if (index === currentIndex)
//         item.style.display = 'block';
//     });
// });

const contactForm = document.querySelector('#contactForm')
emailjs.init({
  publicKey: 'IKxipXtoFXDPv4CtZ',
})
contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  emailjs
    .send('service_cjr2lbq', 'template_o518t7e', {
      to_name: 'Subhanshu',
      from_name: e.target.name.value,
      message: e.target.message.value,
      reply_to: e.target.email.value,
    })
    .then(
      (response) => {
        console.log('Email sent successfully:', response)
        alert('Message sent successfully!')
      },
      (error) => {
        console.error('Failed to send email:', error)
        alert('Failed to send message. Please try again later.')
      }
    )
    .finally(() => {
      e.target.reset()
    })
})

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  // Mouse Interaction
  button.addEventListener('mouseover', function () {
    this.classList.add('hovered')
  })

  button.addEventListener('mouseout', function () {
    this.classList.remove('hovered')
  })

  // Touch Interaction
  button.addEventListener('touchstart', function (e) {
    this.classList.add('hovered')
    e.preventDefault()
  })

  button.addEventListener('touchend', async function () {
    await new Promise((resolve) => setTimeout(resolve, 100))
    this.classList.remove('hovered')
    button.click()
  })
})

const pEmojiButton = document.querySelector('.cowBoyEmoji img')

pEmojiButton.addEventListener('click', function () {
  // Select all .p-card elements inside the event handler

  const pcards = document.querySelectorAll('.p-card')

  // Clone the first card
  const firstCard = pcards[0].cloneNode(true)
  firstCard.classList.add('rotate')
  // Store the parent element of the cards
  const parentElement = pcards[0].parentElement

  // Remove the first card from its parent
  parentElement.removeChild(pcards[0])

  // Append the cloned first card to the end of its parent
  parentElement.appendChild(firstCard)
})
