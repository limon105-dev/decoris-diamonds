$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// **..mobile-dropdown-accordion js start..**
	$('.sidebar-submenu-open').on('click', function () {
		$(this).next(".megamenu-wrapper").addClass('active');
	});

	$('.sidebar-close-btn').on('click', function () {
		$(this).parent().parent().parent(".megamenu-wrapper").removeClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

	// cart-sidebar js start---
	// $(".cart-sidebar-open-btn").click(function (event) {
	// 	event.stopPropagation();
	// 	$(".cart-sidebar").toggleClass("active");
	// 	$("body").toggleClass("active");
	// });

	// $(".cart-sidebar-close-window-btn").click(function (event) {
	// 	event.stopPropagation();
	// 	$(".cart-sidebar").removeClass("active");
	// 	$("body").toggleClass("active");
	// });

	// $(".side-cart-close-btn").click(function (event) {
	// 	event.stopPropagation();
	// 	$(".cart-sidebar").toggleClass("active");
	// 	$("body").toggleClass("active");
	// });
	// cart-sidebar js end---

	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").removeClass('active');
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").removeClass('active');
	});
	// filter sidebar js end--

	// **..filter-accordion js start..**
	$('.accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..filter-accordion js end..**

	// product varient js start--
	$(".label-accordion-btn").click(function (event) {
		event.stopPropagation();
		$(this).next().slideDown();
		$(this).parent().parent().siblings().find(".label-content-bottom").slideUp();
	});
	// product varient js end--

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..faq-accordion js end..**

	// **..custom select-accordion js start..**
	$('.custom-select-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..custom select-accordion js end..**

	// --tab js start--
	$('.collection-tab-btn').click(function () {
		$('.tab-nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});
	// --tab js end--
})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// topbar slider js start--
var swiper = new Swiper(".top-bar-slider", {
	slidesPerView: 1,
	loop: true,
	speed: 5000,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	}
});
// topbar slider js end--

// hero slider js start--
var swiper = new Swiper(".hero-slider", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	speed: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// hero slider js end--

// testimonial-slider js start--
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".testimonial-pagination",
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 1px
		1: {
			spaceBetween: 10,
			slidesPerView: 1,
		},
		// when window width is >= 430px
		576: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// testimonial-slider js end--

// product-slider js start---
var swiper = new Swiper(".product-slider-thumb", {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 4,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
			slidesPerView: 5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 5,
		}
	}
});
var swiper2 = new Swiper(".product-slider", {
	loop: true,
	autoHeight: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});
// product-slider js end---

// price range js start---
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// price range js end---