
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
  
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
        menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2700,
        disableOnInteraction:false,
    },
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2700,
        disableOnInteraction:false,
    },
   pagination: {
    el:".swiper-pagination",
    clickable: true,
   },
   breakpoints: {
    0:{
        slidesPerView:1,
    },
   768:{
        slidesPerView:2,
    },
    991:{
        slidesPerView:3,
    },
   },
});
   var swiper = new Swiper(".gallery-slider",{
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction:false,
    },
   pagination: {
    el:".swiper-pagination",
    clickable: true,
   },
   breakpoints: {
    0:{
        slidesPerView:1,
    },
   768:{
        slidesPerView:2,
    },
    991:{
        slidesPerView:3,
    },
   },
   });

  
   var swiper = new Swiper(".review-slider",{
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },
   pagination: {
    el:".swiper-pagination",
    clickable: true,
   },
   
   });
   
   let accordions = document.querySelectorAll('.faqs .row .content .box');

   accordions.forEach(acco=>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
       acco.classList.add('active')
    }
   });
   
