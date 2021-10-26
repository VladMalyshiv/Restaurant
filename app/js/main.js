$(function () {
	$('.specialties__slider').slick({
		infinite: true,
		arrows:false,
		dots:true,
	  });
	$('.menu__topSlider').slick({
		slidesToShow:7,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor:'.menu__botSlider'
	});
	$('.menu__botSlider').slick({
		slidesToShow:1,
		asNavFor:'.menu__topSlider',
		arrows: false,
		draggable:false,
	})
})