

AOS.init();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
  //   slidesPerGroup:1,
    loop:true,
  //   loopFillGroupWithBlank:true,
  centerSlide:'true',
  fade:true,
  grabCursor:'true',
  //   freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    },
    breakpoints:{
       0: {
          slidesPerView:1
       },      
       520: {
          slidesPerView:2
       },      
       950: {
          slidesPerView:3
       },      
    },
  });


  // for backtime code

  var countDownDate= new Date("Sep 16, 2023 00: 00: 00").getTime();
  var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate-now;

    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
  })


 