const pctelems = document.querySelectorAll(".js-pinnedOnScroll")

pctelems.forEach( (elem, index) => {
  
  ScrollTrigger.create({
    trigger: elem,
    start: "top 40px",
    end: ()=> "+=" + (elem.parentElement.offsetHeight - elem.offsetHeight),
    // end: "bottom 10px",
    id: "elem" + index,  
    pin: true,
    pinSpacing: true,
    scrub: 1,
    // markers: true
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