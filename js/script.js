const accordion = document.querySelector('.faq');


const expandContent = content => {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.classList.remove('not-visible');
}

const collapseContent = content => {
    content.style.maxHeight = '';
    // add class aften transition finish for smooth effect
    content.addEventListener('transitionend', () => {
        content.classList.add('not-visible');
    }, { once: true });
}

const collapseOthers = btn => {
    const allActive = document.querySelectorAll('.accordion__btn--active');  
    allActive.forEach(element => {
        if (element !== btn) {
            handleCollapsibleElement(element);
        }
    });
}

const handleCollapsibleElement = btn => {
    btn.classList.toggle('accordion__btn--active');

    const content = btn.nextElementSibling;

    if (content.style.maxHeight === '') {
        expandContent(content);
    } else {
        collapseContent(content);
    }
}

accordion.addEventListener('click', event => {
    if (event.target.classList.contains('accordion__btn')) {
        collapseOthers(event.target);
        handleCollapsibleElement(event.target);
    }
});
