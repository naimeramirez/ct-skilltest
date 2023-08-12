// carousel
const carousel = document.querySelector('.carousel');
const carouselIcons = document.querySelectorAll('.carousel-control i');

let isDragStart = false, prevPageX, prevScrollLeft;

carouselIcons.forEach((icon => {
    icon.addEventListener('click', () => {
        if (icon.id === 'left') {
            carousel.scrollLeft = 0;
        } else if (icon.id === 'right') {
            carousel.scrollLeft = carousel.scrollWidth;
        } else if (icon.id === 'middle') {
            const middlePosition = (carousel.scrollWidth - carousel.clientWidth) / 2;
            carousel.scrollLeft = middlePosition;
        }
    })
}))

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const  dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);


// accordion
const accordionTab = document.querySelectorAll('.accordion-tab');

accordionTab.forEach(accordionTab => {
    accordionTab.addEventListener('click', e => {

        const currentlyActive = document.querySelector('.accordion-tab.active');

        if (currentlyActive && currentlyActive !== accordionTab) {
            currentlyActive.classList.toggle('active');
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        accordionTab.classList.toggle('active');
        const accordionItemBody = accordionTab.nextElementSibling;
        if (accordionTab.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})



// tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active-link')
        })
        tab.classList.add('active-link')
        target.classList.add('active')
    })
})