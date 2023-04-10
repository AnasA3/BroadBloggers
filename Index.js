/SECTION 1/

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators li');

let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function showIndicator(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    showIndicator(currentIndex);
  });
});

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  showIndicator(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showSlide(currentIndex);
  showIndicator(currentIndex);
}

setInterval(nextSlide, 3000);


/FUTURE DEPENDS SECTION/

const infoSection = document.querySelector(".future");
const hiddenElements = infoSection.querySelectorAll(".hidden");
window.addEventListener("scroll", revealElements);

function revealElements() {
	const topOfSection = infoSection.offsetTop - window.innerHeight / 2;
	if (window.scrollY > topOfSection) {
		hiddenElements.forEach(element => element.classList.add("visible"));
	} else {
		hiddenElements.forEach(element => element.classList.remove("visible"));
	}
}

/FOOD CONTENT ON CATEGORIES PAGE/

function showFood() {
  document.getElementById("food").style.display = "block";
}

function hideFood() {
  document.getElementById("food").style.display = "none";
}

