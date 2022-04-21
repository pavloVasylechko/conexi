$('.banner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows:'.banner__slider-arrows',
    vertical: true,
    prevArrow:'<i class="slick-prev slick-arrow banner__items-arrows fa-solid fa-arrow-left-long"></i>',
    nextArrow:'<i class="slick-next slick-arrow banner__items-arrows fa-solid fa-arrow-right-long"></i>'
  });

  $('.reviews__images').slick({
    infinite:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    asNavFor: '.reviews__items',
    focusOnSelect:true
  });
  
  $('.reviews__items').slick({
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.reviews__images',
    appendArrows:'.reviews__slider-arrows',
    prevArrow:'<i class="slick-prev slick-arrow banner__items-arrows fa-solid fa-arrow-left-long"></i>',
    nextArrow:'<i class="slick-next slick-arrow banner__items-arrows fa-solid fa-arrow-right-long"></i>'
  });
