'use strict';

document.addEventListener('click', (e) => {
    const targetItem = e.target;

    if(targetItem.closest('.icon__menu')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if(targetItem.closest('[data-goto]')) {
        if(document.documentElement.classList.contains('menu-open')) {
            document.documentElement.classList.remove('menu-open');
        }

        const goTo = targetItem.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if(goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: 'smooth'
            })
        }
        e.preventDefault();
    }
});

