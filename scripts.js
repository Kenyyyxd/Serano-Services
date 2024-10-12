// Menu

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});


// The Plan

const images = ["img/email.jpg", "img/virtual.jpg", "img/photog.webp", "img/drone.jpg"];
let currentImageIndex = 0;

function changeImage() {
  const imageElement = document.getElementById("slideshow-image");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

setInterval(changeImage, 2000);



// The Expertise

const texts = document.querySelectorAll('.text');
const displayedImage = document.getElementById('displayed-image');

const handleHover = (text) => {
  const newImageSrc = text.getAttribute('data-image');
  if (newImageSrc) {
    displayedImage.src = newImageSrc;
  }
  displayedImage.classList.add('show');

  texts.forEach(t => t.classList.remove('active'));

  text.classList.add('active');
};

texts.forEach(text => {
  text.addEventListener('mouseover', () => handleHover(text));
});


window.addEventListener('DOMContentLoaded', () => {
  const firstText = texts[0];
  if (firstText) {
    handleHover(firstText);
  }
});




// The Process

const headers = document.querySelectorAll('.accordion-header');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) {
        item.classList.remove('show');
        item.previousElementSibling.querySelector('.accordion-icon').textContent = '+';
      }
    });

    content.classList.toggle('show');
    icon.textContent = content.classList.contains('show') ? '-' : '+';
  });

  if (index === 0) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    content.classList.add('show');
    icon.textContent = '-';
  }
});





// scroll

let isScrolling = false;

window.addEventListener('scroll', function() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function() {
      window.scrollTo({
        top: window.scrollY, 
        behavior: 'smooth'
      });
      isScrolling = false;
    });
  }
});


// back to top

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// text-animation

const planTitles = document.querySelectorAll('.animate');
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.5, rootMargin: "0px 0px -50px 0px" });

planTitles.forEach(title => {
  titleObserver.observe(title);
});



// background change color

if (window.innerWidth > 760) {
const sections = document.querySelectorAll('.section');


const sectionColors = {
  plan: '#111111',
  expertise: '#ececec',
  process: '#44493d',
  market: '#111111',
  foot: '#fff',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      document.body.style.backgroundColor = sectionColors[entry.target.id];
    }
  });
}, {
  threshold: 0.3
});


sections.forEach(section => {
  observer.observe(section);
});
}



