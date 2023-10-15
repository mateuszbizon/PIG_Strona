const allSwitches = document.querySelectorAll('.goal__switch');

allSwitches.forEach(element => {
    element.addEventListener('click', () => {
        const elementSwitchBall = element.querySelector('.goal__switch-ball');

        element.classList.toggle('goal__switch--active');
        elementSwitchBall.classList.toggle('goal__switch-ball--active');
    })
})