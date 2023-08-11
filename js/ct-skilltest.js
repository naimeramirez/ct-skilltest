// carousel
const carousel = document.querySelector('.carousel');
const firstImg = carousel.querySelectorAll('img')[0];
const carouselIcons = document.querySelectorAll('.carousel-control i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth;

carouselIcons.forEach((icon => {
    icon.addEventListener('click', () => {
        if (icon.id === 'left') {
            carousel.scrollLeft = 0;
        } else if (icon.id === 'right') {
            carousel.scrollLeft = carousel.scrollWidth;
        } else if (icon.id === 'middle') {
            const middle = carousel.scrollWidth / 2;
            carousel.scrollLeft = middle;
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