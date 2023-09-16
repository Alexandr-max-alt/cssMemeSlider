'use strict'

const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot');

window.addEventListener('resize',showSlide)

let sliderCount = 0
let sliderWidth;

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth; 
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlide()
}
showSlide()

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = sliderImages.length-1
    }
    rollSlide()
}

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0
    }
    rollSlide()
}


function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'))
    sliderDots[index].classList.add('active-dot')
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index
        rollSlide()
        thisSlide(index)
        thisText(index)
    })
})


const sliderLineForText = document.querySelector('.slider__line2')
const texts = document.querySelectorAll('.text')

function thisText(index) {
    texts.forEach(item => item.classList.remove('text-active'))
    texts[index].classList.add('text-active')
}


