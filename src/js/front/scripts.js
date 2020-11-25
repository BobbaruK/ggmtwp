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
				breakpoint: 992,
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

function gsap_frontpage() {

	//------------------------------------------------
	// section1 - subheader
	//------------------------------------------------
	let fp_s1_h1 = document.querySelector(".subHeader h1");
	let fp_s1_p = document.querySelector(".subHeader p");
	let fp_s1_btnw = document.querySelector(".subHeader .cssecoBtnWrapper");
	//---
	const fp_subheader = gsap.timeline({
		delay: 1,
		defaults: { // children inherit these defaults
			duration: .5,
			ease: "ease" 
		},
	});
	//---
	fp_subheader
		.from(fp_s1_h1 ,{ 
			opacity: 0, 
			x: "-360px", 
		})
		.from(fp_s1_btnw ,{
			opacity: 0, 
			x: "-360px", 
		}, "-=.5")
		.from(fp_s1_p ,{
			duration: 2,
			text: {
				value: " ",
			},
		})
	//------------------------------------------------


	//------------------------------------------------	
	// section2 - whyus
	//------------------------------------------------
	let fp_s2_h2 = document.querySelector(".whyus h2");
	let fp_s2_p = document.querySelector(".whyus p");
	let fp_s2_btnw = document.querySelector(".whyus .cssecoBtnWrapper");
	//---
	const fp_whyus = gsap.timeline({
		delay: .5,
		defaults: { // children inherit these defaults
			duration: .5,
			ease: "ease" 
		},
		stagger: .2,
	}); 
	//---
	fp_whyus
		.from(fp_s2_h2, {
			opacity: 0, 
			y: "20px",
		})
		.from(fp_s2_btnw, {
			opacity: 0, 
			y: "20px",
		})
		.from(fp_s2_p ,{
			duration: 2,
			text: {
				value: " ",
			},
		})
	//------------------------------------------------


	//------------------------------------------------
	// section3 - tmapproach
	//------------------------------------------------
	let fp_s3_h2 = document.querySelector(".tmapproach h2");
	let fp_s3_1st_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_1:before");
	let fp_s3_2nd_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_1:after");
	let fp_s3_3rd_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_2:after");
	let fp_s3_4th_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_3:after");
	let fp_s3_5th_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_4:after");
	let fp_s3_6th_line = CSSRulePlugin.getRule("#site-wrapper.fp section#section3.tmapproach .tma_card_wrapper .tma_card.tma_card_5:after");
	let fp_s3_icons = document.querySelectorAll(".tma_card .icon");
	let fp_s3_card_ttl = document.querySelectorAll(".tma_card_inner h3");
	let fp_s3_card_p = document.querySelectorAll(".tma_card_inner p");
	let fp_s3_card_rm = document.querySelectorAll(".tma_card_inner .read");
	let fp_se_hover = document.querySelectorAll(".tma_card");
	//---
	const fp_tma = gsap.timeline({
		delay: .5,
		defaults: { // children inherit these defaults
			duration: .35,
			ease: "ease" 
		},
		scrollTrigger: {
			trigger: ".tmapproach",
			// start: "top 80%",
			start: "top center",
			end: "bottom 2%",
			toggleActions: "play none none none",
			// markers: true
		},
		onComplete: () => {

			let user1 = document.getElementById("user1");
			let user2 = document.getElementById("user2");
			let arrow = document.getElementById("arrow");
			let the_frame = document.getElementById("the_frame");
			let dollar = document.getElementById("dollar");
			let hand = document.getElementById("hand");
			let fdisk = document.getElementById("fdisk");
			// Hover animation
			const fps3_icon1 = gsap.timeline({
				paused: true,
				defaults: { // children inherit these defaults
					duration: .25,
					ease: "ease" 
				},
			});
			fps3_icon1
				.to(user1, {
					scale: 1.2,
					x: "-5px",
				})
				.to(user2, {
					scale: 1.2,
				}, "-=.15")
				.to(arrow, {
					scale: 1.2,
					y: "-5px",
					rotate: "-20deg"
				}, "-=.15")
				.to(the_frame, {
					scale: 1.1,
					x: "-8px",
					y: "-17px",
				}, "-=.20")
				.to(dollar, {
					scale: 1.1,
					y: "-7px",
					ease: "back",
				}, "-=.20")
				.to(hand, {
					duration: .5,
					x: "10px",
					ease: "elastic",
				}, "-=.10")
				.to(fdisk, {
					duration: .5,
					x: "10px",
					ease: "elastic",
				}, "-=.5")

			
			
			fp_se_hover.forEach( function(elem, index) {				
		
				fp_se_hover[index].addEventListener("mouseenter", () => {

					switch(fp_s3_icons[index].id) {
						case "fps3_icon1":
							fps3_icon1.play();
							break;
						case "otherIcon":
							console.log("yeeee:")
							break;
						default:
							console.log("hover!")
					}
					
				});
				
				fp_se_hover[index].addEventListener("mouseleave", () => {

					switch(fp_s3_icons[index].id) {
						case "fps3_icon1":
							fps3_icon1.reverse();
							break;
						case "otherIcon":
							console.log("out:")
							break;
						default:
							console.log("hover!")
					}

				});
		
			})
		}
	}); 
	//---
	fp_tma
		.from(fp_s3_h2, {
			opacity: 0, 
			y: "60px",
		})
		.from(fp_s3_icons, {
			duration: 1,
			ease: "elastic",
			scale: 0,
			stagger: .1,
		}, "-=.30")
		.from(fp_s3_card_ttl, {
			opacity: 0,
			y: 200,
		}, "-=1")
		.from(fp_s3_card_p, {
			opacity: 0,
			y: 200,
		}, "-=.9")
		.from(fp_s3_card_rm, {
			opacity: 0,
			x: -200,
		}, "-=.9")
		.from(fp_s3_1st_line, {
			duration: .5,
			left: "-9000px",
		}, "-=.3")
		.from(fp_s3_2nd_line, {
			duration: .5,
			right: "9000px"
		}, "-=.4")
		.from(fp_s3_3rd_line, {
			duration: .5,
			right: "9000px"
		}, "-=.4")
		.from(fp_s3_4th_line, {
			duration: .5,
			right: "9000px"
		}, "-=.4")
		.from(fp_s3_5th_line, {
			duration: .5,
			right: "9000px"
		}, "-=.4")
		.from(fp_s3_6th_line, {
			duration: .5,
			right: "9000px"
		}, "-=.4")
	//------------------------------------------------



	//------------------------------------------------
	// section4 - supply
	//------------------------------------------------

	//---
	const fp_supply = gsap.timeline({
		duration: 0.5,
		scrollTrigger: {
			trigger: ".supply",
			start: "top 90%",
			end: "bottom 2%",
			toggleActions: "play complete complete complete",
			// markers: true
		}
	});
	//---
	fp_supply
		.from(".supply h2",{ 
			ease: "back", 
			opacity: 0, 
			y: "360px", })
		.from(".supply p", { 
			opacity: 0, 
			y: "-360px", 
		}, "-=.4")
		.from(".supply .supply_slider", { 
			opacity: 0, 
			y: "360px", 
		}, "-=.4")
		.set('.supply .supply_slider', { 
			zIndex:5 
		})
		.from(".supply .moreBtnWrapper", { 
			opacity: 0, 
			ease: "back",
			y: "360px", 
		}, "-=.3");
	//------------------------------------------------



	//------------------------------------------------
	// section6 - control
	//------------------------------------------------

	//---
	const fp_truck = gsap.timeline({
		scrollTrigger: {
			trigger: ".control",
			start: "top center",
			end: "bottom 45%",
			toggleActions: "restart none none reverse",
			// markers: true
		}
	});
	//---
	fp_truck
		.from(".truck",{ 
			duration: 1, 
			ease: "ease", 
			opacity: 0, 
			x: "-760px", 
		});
	//------------------------------------------------

}

function gsap_disposableGowns() {

	let dg_gsapTrigger = document.querySelectorAll(".page-template-cssecoTemplate-disposablegowns #section5 > section .container");
	let dg_disposableGownsTables = document.querySelectorAll(".page-template-cssecoTemplate-disposablegowns #section5 > section .container .table-responsive table");
	let dg_disposableGownsTxt = document.querySelectorAll(".page-template-cssecoTemplate-disposablegowns #section5 > section .container .txtWrapper");

	dg_gsapTrigger.forEach(function(elem, index){

		const dg_tableParentHeight = dg_disposableGownsTables[index].parentNode.offsetHeight;
		const dg_txtParentHeight = dg_disposableGownsTxt[index].parentNode.offsetHeight;
		
		const dg_pinInTable = gsap.timeline();
		const dg_pinInTxt = gsap.timeline();

		// console.log(document)

		if (screen.width > 991) {

			ScrollTrigger.create({
				trigger: dg_disposableGownsTables[index],
				start: "top 120px",
				end: () => "+=" + (dg_tableParentHeight - dg_disposableGownsTables[index].offsetHeight),
				// scrub: 3,
				pin: true,
				pinSpacing: false,
				anticipatePin: 1,
				animation: dg_pinInTable,
				// markers: true,
				// id: "table" + index,
			});
			ScrollTrigger.create({
				trigger: dg_disposableGownsTxt[index],
				start: "top 140px",
				end: () => "+=" + (dg_txtParentHeight - dg_disposableGownsTxt[index].offsetHeight),
				// scrub: 3,
				pin: true,
				pinSpacing: false,
				anticipatePin: 1,
				animation: dg_pinInTxt,
				// markers: true,
				// id: "text" + index,
			});
			
		}

	});

}

function gsap_reusableGowns() {

	let rg_gsapTrigger = document.querySelectorAll(".page-template-cssecoTemplate-reusablegowns #section4 > section .container");
	let rg_reusableGownsTables = document.querySelectorAll(".page-template-cssecoTemplate-reusablegowns #section4 > section .container .table-responsive table");
	let rg_reusableGownsTxt = document.querySelectorAll(".page-template-cssecoTemplate-reusablegowns #section4 > section .container .txtWrapper");
	
	console.log(rg_gsapTrigger)

	rg_gsapTrigger.forEach(function(elem, index){

		const rg_tableParentHeight = rg_reusableGownsTables[index].parentNode.offsetHeight;
		const rg_txtParentHeight = rg_reusableGownsTxt[index].parentNode.offsetHeight;

		
		const rg_pinInTable = gsap.timeline();
		const rg_pinInTxt = gsap.timeline();

		// console.log(document)

		if (screen.width > 991) {

			ScrollTrigger.create({
				trigger: rg_reusableGownsTables[index],
				start: "top 120px",
				end: () => "+=" + (rg_tableParentHeight - rg_reusableGownsTables[index].offsetHeight),
				// end: "bottom",
				// scrub: 3,
				pin: true,
				pinSpacing: false,
				anticipatePin: 1,
				animation: rg_pinInTable,
				// markers: true,
				// id: "table" + index,
			});
			ScrollTrigger.create({
				trigger: rg_reusableGownsTxt[index],
				start: "top 140px",
				end: () => "+=" + (rg_txtParentHeight - rg_reusableGownsTxt[index].offsetHeight),
				// scrub: 3,
				pin: true,
				pinSpacing: false,
				anticipatePin: 1,
				animation: rg_pinInTxt,
				// markers: true,
				// id: "text" + index,
			});
			
		}

	});

}


let gsap_interval = setInterval(function(){
	if( document.getElementById("preloader-counter").innerHTML === "100%" ){
		clearInterval(gsap_interval);

		gsap_frontpage();
		gsap_disposableGowns();
		gsap_reusableGowns();
		
	}
}, 0.2);