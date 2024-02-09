'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btnOpen => btnOpen.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("x : ", window.scrollX, "y : ", window.scrollY);
  // window.scrollTo({ left: s1coords.left + window.scrollX, top: s1coords.top + window.scrollY, behavior: 'smooth' })
  section1.scrollIntoView({ behavior: "smooth" })
})

// Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     // console.log("el : ", el);
//     e.preventDefault();
//     const id = this.getAttribute('href');  // this = e.target
// // console.log("E.target : ", e.target, e.currentTarget);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   })
// })
// Normal way of adding same event with same callback to multiple functions

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log("E.target : ", e.target, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})
// Efficient way through event delegation


// Operations tab

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // console.log(this);   // div.operations__tab-container
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(function (tab) {
    tab.classList.remove('operations__tab--active')
  })

  tabsContent.forEach((el) => el.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")

  // console.log(clicked.dataset.tab);
})


// nav items fade-in fade-out

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const target = e.target;
    const siblings = target.closest('.nav').querySelectorAll(".nav__link");
    const logo = target.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== target) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1))


// Stickey navigation

// const initialCo = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCo.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky')
// })


// Sticky navbar : Intersection API
const navHeight = nav.getBoundingClientRect().height;

// const obsCallback = (entries, observer) => {
//   // console.log("Observer callback called...");
//   // if (entries[0].isIntersecting) {
//   // console.log("entries : ", entries);
//   // console.log("entries[0] : ", entries[0]);
//   // console.log("Intersection ratio : ", entries[0].intersectionRatio);
//   // console.log("isIntersecting : ", entries[0].isIntersecting);
//   // console.log("observer : ", observer);
//   // }
//   // const props = entries[0];
//   // const ratio = console.log(props.isIntersecting ? "Yaa!!" : "Nooooo!!");

//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// }

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
}


// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(document.querySelector('header'));


// Reveal sections

const allSections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry.target);
  // console.log(entry.intersectionRatio);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden")
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: "-25px"
})
allSections.forEach((section) => {
  // console.log(section);
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// Lazy loading images
const images = document.querySelectorAll('img[data-src]');

const lazyLoad = (entries, observer) => {
  console.log("entries--------> : ", entries);
  const [entry] = entries;
  // console.log(entry.target, entry.target.dataset.src);
  // console.log(entry.intersectionRatio);

  if (!entry.isIntersecting) return;

  // Replace
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img')

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0,
  rootMargin: '100px'
})

images.forEach((img) => {
  // console.log(img);
  imgObserver.observe(img);
})


// Slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0;
let maxSlide = 3;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible'

slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * i}%)`)

btnRight.addEventListener('click', function () {
  curSlide++;
  if (curSlide == maxSlide) curSlide = 0;
  slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - curSlide)}%)`)
})

btnLeft.addEventListener('click', function () {
  curSlide--;
  if (curSlide < 0) curSlide = maxSlide - 1;
  slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - curSlide)}%)`)
})