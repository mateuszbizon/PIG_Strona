const floatingNav = document.querySelector('.floating-nav');
const navBtn = document.querySelector('.nav__burger');
const floatingNavCloseIcon = document.querySelector('.floating-nav__top-close-icon')

navBtn.addEventListener('click', () => {
    floatingNav.classList.toggle('show-floating-nav');
})

floatingNavCloseIcon.addEventListener('click', () => {
    floatingNav.classList.remove('show-floating-nav')
})