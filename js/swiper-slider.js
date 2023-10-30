var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 45,
    loop: true,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});