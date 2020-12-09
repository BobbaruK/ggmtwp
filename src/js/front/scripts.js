jQuery(function ($) {

	let animation_time = 560;
	
	//============
	// Front Page Animation
	//============
	let timesRun = 0;
	let interval = setInterval(function(){
		timesRun += 1;
		if(timesRun === 4){
			clearInterval(interval);
		}
		$(".bgfp").toggleClass("next_dheader");
	}, 5000);


	//============
	// Fixed Header
	//============
	var lastScrollTop = 0;

	$(window).on("resize", function(){
		ScrollTrigger.refresh();
	})

	$(window).on("scroll", function(event){

		ScrollTrigger.refresh();

		var st = $(this).scrollTop();

		function transScroll() {

			$("footer#footer.siteFooter.scrollDownFooter").css("padding-bottom", $(".disclaimer_strip").height());
			$("footer#footer.siteFooter.scrollUpFooter").css("padding-bottom", 0);

			if (st > $("header#header.siteHeader").height() + 20) {

				$("header#header.siteHeader.hideHeader").css("transition", "top " + animation_time + "ms ease");
				$("header#header.siteHeader.showHeader").css("transition", "top " + animation_time*5 + "ms ease");

			} else {

				$("header#header.siteHeader").removeAttr("style");

			}
		}

		if (st > lastScrollTop){

			// downscroll code
			$("body").addClass("scrolldown").removeClass("scrollup");
			$("footer#footer.siteFooter").addClass("scrollDownFooter").removeClass("scrollUpFooter").find(".disclaimer_strip").addClass("showDisclaimer").removeClass("hideDisclaimer");
			
			if (st > $("header#header.siteHeader").height()) {
				// 	// downscroll code for header
				$("header#header.siteHeader").removeClass("showHeader").addClass("hideHeader");
				
			} 
			
			transScroll();

		} else {

			// upscroll code
			$("body").addClass("scrollup").removeClass("scrolldown");
			$("header#header.siteHeader").addClass("showHeader").removeClass("hideHeader");
			$("footer#footer.siteFooter").addClass("scrollUpFooter").removeClass("scrollDownFooter").find(".disclaimer_strip").addClass("hideDisclaimer").removeClass("showDisclaimer");

			if($(window).scrollTop() < 1) {

				$("header#header.siteHeader").removeClass("showHeader");
				$("body").removeClass("scrollup").removeClass("scrolldown");

			}

			transScroll();

		}

		lastScrollTop = st;

	});
	

	//============
	// Responsive Menu
	//============
	$('.burger').on("click", function() {

		if ( $(this).hasClass("burger--close") ) {

			$(".leMenu").removeClass("show", animation_time);
			$("#header").removeClass("menu_opened", animation_time);
			$(this).removeClass("burger--close");
			$("#cssecoMenu .menu-item-has-children").removeClass("menu_open").find(".sub-menu").slideUp(animation_time, "linear");;
			$("body").removeAttr("style");

		} else {

			$(".leMenu").addClass("show", animation_time);
			$("#header").addClass("menu_opened", animation_time);
			$(this).addClass("burger--close");
			$("body").css("overflow", "hidden");

		}

	});

	$("#cssecoMenu .menu-item-has-children>a").after("<div class='menu_caret'><i class='fas fa-caret-down'></i></div>");

	function detectMD() {

		if ( window.innerWidth < 768 ) {

			$(".leMenu").addClass("on_mobile").removeClass("on_desktop");

		} else {

			$(".leMenu").addClass("on_desktop").removeClass("on_mobile").removeClass("show");
			$(".menu-item-has-children").removeClass("menu_open");
			$(".burger").removeClass("burger--close");
			$(".sub-menu").removeAttr("style");
			$("body").css("overflow", "");

		}
	}

	detectMD();
	
	window.addEventListener("resize", function () {
		detectMD();
	});

	$("#cssecoMenu .menu-item-has-children").on("click", function () { // click

		if ( window.innerWidth < 992 ) {

			if ($(this).hasClass("menu_open")) { // inchis
				$(this).removeClass("menu_open");
				$(this).find(".sub-menu").slideUp(animation_time, "linear");
				$(this).siblings().removeClass("menu_open");
				$(this).find(".menu-item-has-children").removeClass("menu_open");
				$(this).siblings().find(".sub-menu").slideUp(animation_time, "linear");
	
			} else { // deschis
	
				$(this).addClass("menu_open");
				$(this).find(".sub-menu").slideDown(animation_time, "linear");
				$(this).siblings().removeClass("menu_open");
				$(this).siblings().find(".menu-item-has-children").removeClass("menu_open");
				$(this).siblings().find(".sub-menu").slideUp(animation_time, "linear");
	
			}

		}

	});
	$("#cssecoMenu .menu-item-has-children > a").on("click", function (e) { // deactivate click on items with children
		e.preventDefault();
	});
	
	$(".subsection_ttl > a").on("click", function(e){
		e.preventDefault();
	});
	

	// ==================
	// Carousel next and prev thumb preview
	// ==================
	var carouselClass = '.csseco_carousel';
	$(document).on('click', carouselClass, function(){
		var id = $("#"+$(this).attr("id"));
		$(id).on('slid.bs.carousel', function(){
			csseco_get_bs_thumbs(id);
		});
	});
	$(document).on('mouseenter', carouselClass, function(){
		var id = $("#"+$(this).attr("id"));
		csseco_get_bs_thumbs(id);
	});
	function csseco_get_bs_thumbs( id ) {
		var prevThumb = $(id).find('.carousel-item.active').find('.prev-thumb-preview').data('image');
		$(id).find('.carousel-control.left').find('.preview-thumb').css('background-image', 'url('+prevThumb+')');
		var nextThumb = $(id).find('.carousel-item.active').find('.next-thumb-preview').data('image');
		$(id).find('.carousel-control.right').find('.preview-thumb').css('background-image', 'url('+nextThumb+')');
	}


	//============
	// Get the year to #lp_year
	//============
	$("#lp_year").html(new Date().getFullYear());


	//============
	// Add Classes to img element
	//============
	$("img").addClass("img-fluid lazyload");


  //============
	// Scroll to...
	//============
	$(".csseco_scrollTo").on("click", function(e) {
		e.preventDefault();
		var location = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(location).offset().top
		}, 1000);
	});


	//============
	// Slick Slider
	// https://kenwheeler.github.io/slick/
	//============
	$('.testimonials_slider').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		dots: false,
  	infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					dots: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '40px',
					dots: true,
					slidesToShow: 1
				}
			}
		]
	});
	$('.supply_slider').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		dots: false,
  	infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
});

//============
// GSAP Animations
//============
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(CSSRulePlugin);

function gsap_frontpage() {}

function gsap_disposableGowns() {

	const pctelems = document.querySelectorAll(".txtWrapper")

	pctelems.forEach( (elem, index) => {
		
		ScrollTrigger.create({
			trigger: elem,
			start: "top 40px",
			end: ()=> "+=" + (elem.parentElement.offsetHeight - elem.offsetHeight),
			// end: "bottom 10px",
			id: "elem" + index,  
			pin: true,
			pinSpacing: true,
			// scrub: true,
			markers: true
		});

		
	})



	function scrollDisableOnMobile() {
		if (screen.width < 992) {
			ScrollTrigger.getAll().forEach(ST => ST.disable());
		} else { 
			ScrollTrigger.getAll().forEach(ST => ST.enable());
		}
	}
	scrollDisableOnMobile()
	window.addEventListener('resize', function(){
		scrollDisableOnMobile()
	});

}

function gsap_reusableGowns() {}


let gsap_interval = setInterval(function(){
	if( document.getElementById("preloader-counter").innerHTML === "100%" ){
		clearInterval(gsap_interval);

		gsap_frontpage();
		gsap_disposableGowns();
		gsap_reusableGowns();
		
	}
}, 0.2);