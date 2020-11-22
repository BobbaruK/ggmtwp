const images=document.querySelectorAll("[data-src]");function preloadImage(e){const s=e.getAttribute("data-src");s&&(e.src=s)}const imgOptions={threshold:0,rootMargin:"0px 0px 50px 0px"},imgObserver=new IntersectionObserver(((e,s)=>{e.forEach((e=>{e.isIntersecting&&(preloadImage(e.target),s.unobserve(e.target))}))}),imgOptions);images.forEach((e=>{imgObserver.observe(e)})),
/*! lazysizes - v5.2.0 */
jQuery((function(e){let s=560,r=0,o=setInterval((function(){r+=1,4===r&&clearInterval(o),e(".bgfp").toggleClass("next_dheader")}),5e3);var t=0;function i(){window.innerWidth<768?e(".leMenu").addClass("on_mobile").removeClass("on_desktop"):(e(".leMenu").addClass("on_desktop").removeClass("on_mobile").removeClass("show"),e(".menu-item-has-children").removeClass("menu_open"),e(".burger").removeClass("burger--close"),e(".sub-menu").removeAttr("style"),e("body").css("overflow",""))}e(window).on("scroll",(function(s){ScrollTrigger.refresh();var r=e(this).scrollTop();function o(){e("footer#footer.siteFooter.scrollDownFooter").css("padding-bottom",e(".disclaimer_strip").height()),e("footer#footer.siteFooter.scrollUpFooter").css("padding-bottom",0),r>e("header#header.siteHeader").height()+20?(e("header#header.siteHeader.hideHeader").css("transition","top 560ms ease"),e("header#header.siteHeader.showHeader").css("transition","top 2800ms ease")):e("header#header.siteHeader").removeAttr("style")}r>t?(e("body").addClass("scrolldown").removeClass("scrollup"),e("footer#footer.siteFooter").addClass("scrollDownFooter").removeClass("scrollUpFooter").find(".disclaimer_strip").addClass("showDisclaimer").removeClass("hideDisclaimer"),r>e("header#header.siteHeader").height()&&e("header#header.siteHeader").removeClass("showHeader").addClass("hideHeader"),o()):(e("body").addClass("scrollup").removeClass("scrolldown"),e("header#header.siteHeader").addClass("showHeader").removeClass("hideHeader"),e("footer#footer.siteFooter").addClass("scrollUpFooter").removeClass("scrollDownFooter").find(".disclaimer_strip").addClass("hideDisclaimer").removeClass("showDisclaimer"),e(window).scrollTop()<1&&(e("header#header.siteHeader").removeClass("showHeader"),e("body").removeClass("scrollup").removeClass("scrolldown")),o()),t=r})),e(".burger").on("click",(function(){e(this).hasClass("burger--close")?(e(".leMenu").removeClass("show",s),e("#header").removeClass("menu_opened",s),e(this).removeClass("burger--close"),e("#cssecoMenu .menu-item-has-children").removeClass("menu_open").find(".sub-menu").slideUp(s,"linear"),e("body").removeAttr("style")):(e(".leMenu").addClass("show",s),e("#header").addClass("menu_opened",s),e(this).addClass("burger--close"),e("body").css("overflow","hidden"))})),e("#cssecoMenu .menu-item-has-children>a").after("<div class='menu_caret'><i class='fas fa-caret-down'></i></div>"),i(),window.addEventListener("resize",(function(){i()})),e("#cssecoMenu .menu-item-has-children").on("click",(function(){window.innerWidth<992&&(e(this).hasClass("menu_open")?(e(this).removeClass("menu_open"),e(this).find(".sub-menu").slideUp(s,"linear"),e(this).siblings().removeClass("menu_open"),e(this).find(".menu-item-has-children").removeClass("menu_open"),e(this).siblings().find(".sub-menu").slideUp(s,"linear")):(e(this).addClass("menu_open"),e(this).find(".sub-menu").slideDown(s,"linear"),e(this).siblings().removeClass("menu_open"),e(this).siblings().find(".menu-item-has-children").removeClass("menu_open"),e(this).siblings().find(".sub-menu").slideUp(s,"linear")))})),e("#cssecoMenu .menu-item-has-children > a").on("click",(function(e){e.preventDefault()})),e(".subsection_ttl > a").on("click",(function(e){e.preventDefault()}));var a=".csseco_carousel";function n(s){var r=e(s).find(".carousel-item.active").find(".prev-thumb-preview").data("image");e(s).find(".carousel-control.left").find(".preview-thumb").css("background-image","url("+r+")");var o=e(s).find(".carousel-item.active").find(".next-thumb-preview").data("image");e(s).find(".carousel-control.right").find(".preview-thumb").css("background-image","url("+o+")")}e(document).on("click",a,(function(){var s=e("#"+e(this).attr("id"));e(s).on("slid.bs.carousel",(function(){n(s)}))})),e(document).on("mouseenter",a,(function(){n(e("#"+e(this).attr("id")))})),e("#lp_year").html((new Date).getFullYear()),e("img").addClass("img-fluid lazyload"),e(".csseco_scrollTo").on("click",(function(s){s.preventDefault();var r=e(this).attr("href");e("html, body").animate({scrollTop:e(r).offset().top},1e3)})),e(".testimonials_slider").slick({arrows:!0,centerMode:!0,centerPadding:"0",dots:!1,infinite:!0,slidesToShow:3,responsive:[{breakpoint:992,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",dots:!0,slidesToShow:1}},{breakpoint:576,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",dots:!0,slidesToShow:1}}]}),e(".supply_slider").slick({arrows:!0,centerMode:!0,centerPadding:"0",dots:!1,infinite:!0,slidesToShow:3,responsive:[{breakpoint:992,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:576,settings:{centerMode:!1,centerPadding:"40px",slidesToShow:1}}]})})),gsap.registerPlugin(ScrollTrigger);let gsap_interval=setInterval((function(){if("100%"===document.getElementById("preloader-counter").innerHTML){clearInterval(gsap_interval);let e=gsap.timeline({scrollTrigger:{trigger:".supply",start:"top 95%",end:"150px 2%",toggleActions:"play complete complete complete"}}),s=gsap.timeline({scrollTrigger:{trigger:".control",start:"top 80%",end:"150px 2%",toggleActions:"play complete complete complete"}}),r=gsap.timeline({duration:.5,scrollTrigger:{trigger:".subHeader",toggleActions:"play complete complete complete"}});e.from(".supply h2",{duration:.5,ease:"back",opacity:0,y:"360px"}).from(".supply p",{duration:.5,opacity:0,y:"-360px"},"-=.3").from(".supply .supply_slider",{duration:.5,opacity:0,y:"360px"},"+=.2").set(".supply .supply_slider",{zIndex:5}).from(".supply .moreBtnWrapper",{duration:.5,opacity:0,y:"360px"},"-=.4"),s.from(".truck",{duration:1,ease:"ease",opacity:0,x:"-360px"}),r.from(".subHeader h1",{ease:"ease",stagger:.2,opacity:0,x:"-360px"}).from(".subHeader p",{ease:"ease",stagger:.2,opacity:0,x:"-360px"}).from(".subHeader .cssecoBtnWrapper",{ease:"ease",stagger:.2,opacity:0,x:"-360px"})}}),.2);