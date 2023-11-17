$(function(){


   // preloder-js 
 $('#main-preloder').delay(3000).fadeOut(200, function() {
         
 });


 

// change hash on scroll
const mainSection = document.getElementById("main");
const innerSec = document.querySelectorAll(".slide-sec");
const navbar = document.querySelectorAll(".slide-menu a ");

mainSection.addEventListener("scroll", (event) => {
let top = mainSection.scrollTop;
innerSec.forEach((elem) => {
  let offset = elem.offsetTop;
  let height = elem.offsetHeight;
  let id = elem.getAttribute("id");
  if (top + 40 >= offset && top + 40 < offset + height) {
    
    navbar.forEach((nav) => {
      console.log()
      if (nav.getAttribute("href") === `#${id}`) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    });
  }
});
});


  // side-popup-nav 

  $(document).on("click", ".header__area-menubar-right-sidebar-popup-icon", function () {
    $('.header__area-menubar-right-sidebar-popup').addClass('active');
    $('.sidebar-overlay').addClass('show');
  });
  $(document).on("click", ".header__area-menubar-right-sidebar-popup .sidebar-close-btn", function () {
    $('.header__area-menubar-right-sidebar-popup').removeClass('active');
    $('.sidebar-overlay').removeClass('show');
  });


  // mwnu-active 

  
  $(document).ready(function () {

  
    $('.slide-menu ul li ').click(function () {
      //ACTIVE CLASS
      $('.slide-menu ul li').removeClass('active');
      $(this).addClass('active');
    })
  })








  // product-customer-slick 
$('.product-customer-slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  autoplay:true,
  autoplaySpeed:1500,
  speed:1500,
  centerMode:true,
  centerPadding:"0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});








  // counter-up-js 
  $('.counter').counterUp({
    delay: 100,
    time: 7000,
});




// veno-box 
    new VenoBox({
        selector: '.my-video-links'
      });




});