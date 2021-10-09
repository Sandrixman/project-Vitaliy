$(function () {

    $('.graduate-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `
    });

});
