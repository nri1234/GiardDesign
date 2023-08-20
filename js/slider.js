var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    spaceBetween: 12,
    speed: 1000,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: false,
    grabCursor: false,
});