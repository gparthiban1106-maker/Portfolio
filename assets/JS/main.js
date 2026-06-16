// ================ Show Menu ================
const _navMenu = document.getElementById('_navMenu');
const _navToggle = document.getElementById('_navToggle');
const _navClose = document.getElementById('_navClose');

// ------- Show Menu -------
if (_navToggle) {
  _navToggle.addEventListener('click', () => {
    _navMenu.classList.add('show-Menu');
  });
}

// ------- Hide Menu -------
if (_navClose) {
  _navClose.addEventListener('click', () => {
    _navMenu.classList.remove('show-Menu');
  });
}


// ================ Remove Mobile Menu ================
const navLink = document.querySelectorAll('.nav-Link');

const linkAction = () => {
  const _navMenu = document.getElementById('_navMenu');

  // when we click on each navigation link (nav-Link), it will remove show-Menu class
  _navMenu.classList.remove('show-Menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


// ================ Add Blur Header ================
const blurHeader = () => {
  const header = document.getElementById('header');

  // Add one more class to header if the bottom offset is greater than 50 viewport (half of the viewport)
  this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);


// ================ EmailJS ================
const contactForm = document.getElementById('_contactForm');
const contactMsg = document.getElementById('_contactMsg');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_w47fm9o', 'template_9t2w3u8', '#_contactForm', 'DkWQopiSxLRqjI4vJ').then(() => {
    // Show sent message
    contactMsg.textContent = 'Message sent successfully ✅';

    // Remove message after five seconds
    setTimeout(() => {
      contactMsg.textContent = '';
    }, 5000);

    // Clear input fields
    contactForm.reset();
  }, () => {
    // Show error message
    contactMsg.textContent = 'Message not sent (service error) ❌';
  });
};
contactForm.addEventListener('submit', sendEmail);


// ================ Show Scrollup ================
const scrollUp = () => {
  const scrollUp = document.getElementById('_Scrollup');

  // when the scroll is higher than 350 viewport height then add one more class 'show-Scroll' to the anchor tag with the 'Scrollup' class
  this.scrollY >= 350 ? scrollUp.classList.add('show-Scroll') 
                      : scrollUp.classList.remove('show-Scroll');
};
window.addEventListener('scroll', scrollUp);


// ================ Scroll Sections Active Link ================
const Sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  Sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav-Menu a[href*=' + sectionId + ']');

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-Link');
          }
          else {
            sectionClass.classList.remove('active-Link');
          }
  });
};
window.addEventListener('scroll', scrollActive);


// ================ Scroll Reveal Animation ================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true             //repeat Animations
});

sr.reveal(`.home-Details, .experience, .skills, .contact-Container`);
sr.reveal(`.home-Image`, {delay: 600});
sr.reveal(`.home-Scroll`, {delay: 900});
sr.reveal(`.portfolio-Card, .service-Card`, {interval: 100});
sr.reveal(`.about-Content`, {origin: 'right'});
sr.reveal(`.about-Img`, {origin: 'left'});