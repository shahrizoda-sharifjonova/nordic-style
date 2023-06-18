import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
})

gsap.from('.intro__img', {
    // scrollTrigger: ".intro__img",
    opacity: 0,
    x: 200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
  })
gsap.from('.about__img', {
    scrollTrigger: ".about__img",
    opacity: 0,
    y: 200,
    duration: 1.5,
    ease: "back",
    stagger: .3,
 })
gsap.from('.awards__img', {
    scrollTrigger: ".awards__img",
    opacity: 0,
    y: 200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })
gsap.from('.design__card', {
    scrollTrigger: ".design__card",
    opacity: 0,
    y: 200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })
gsap.from('.prices__img', {
    scrollTrigger: ".prices__img",
    opacity: 0,
    x: 200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })
gsap.from('.contacts__input', {
    scrollTrigger: ".contacts__input",
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })
gsap.from('.contacts__textarea', {
    scrollTrigger: ".contacts__textarea",
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })
gsap.from('.contacts__btn', {
    scrollTrigger: ".contacts__btn",
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "back",
    stagger: .2,
 })