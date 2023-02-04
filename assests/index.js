// =============Banner scroll=================



window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



// ============= hamburger=================

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

// ============= tshirts=================

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    // loop: true,
});