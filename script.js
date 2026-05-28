const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dotsSlider = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
  index = i;
 // controle de limite
  if (index < 0) index = slide.length - 1;
  if (index >= slide.length) index = 0;

 // movimento
  slides.style.transform = `translateX(-${index * 100}%)`;

  // remove active de todos
  slide.forEach(s => s.classList.remove('active'));

  // ativa o atual
  slide[index].classList.add('active');

  // dots
  dotsSlider.forEach(d => d.classList.remove('active'));
  dotsSlider[index].classList.add('active');
}

// inicia
slide[0].classList.add('active');

// 👉 BOTÃO NEXT
document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
});

// 👉 BOTÃO PREV
document.querySelector('.prev').addEventListener('click', () =>{
  showSlide(index - 1);
});

// 👉 DOTS
dotsSlider.forEach((dots, i) => {
  dots.addEventListener('click', () => {
    showSlide(i);
  });
});

const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');
const cardDots = document.querySelectorAll('.cardDot');

let cardIndex = 0;

function showCard(i) {
  cardIndex = i;

  if (cardIndex < 0) cardIndex = card.length - 1;
  if (cardIndex >= card.length) cardIndex = 0;

  cards.style.transform = `translateX(-${cardIndex * 80}%)`;

  cardDots.forEach(d => d.classList.remove('active'));
  cardDots[cardIndex % cardDots.length].classList.add('active');
}

/* SETAS */
document.querySelector('.cardNext').addEventListener('click', () => {
  showCard(cardIndex + 1);
});

document.querySelector('.cardPrev').addEventListener('click', () => {
  showCard(cardIndex - 1);
});

/* DOTS */
cardDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showCard(i);
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
