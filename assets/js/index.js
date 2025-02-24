$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


$(document).ready(function () {
  $('a').each(function () {
    var textContent = $(this).text().trim();
    $(this).attr('title', textContent);
  });
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add("navbar-active");
    nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}




$('.bootstrap-datepicker input').datepicker({
  todayBtn: "linked",
  language: "fr",
  autoclose: true,
  todayHighlight: true
});



$('.clockpicker').clockpicker({
  autoclose: true
});






$(window).scroll(function () {

  if ($(document).scrollTop() > 40) {
    $(".menu").animate({
    }, 1000);
    $(".menu").addClass('menu1');
  }
  else {
    $(".menu").removeClass('menu1');
  }
});


$(document).ready(function(){
  $('.bxslider').bxSlider({

    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    speed:1800,
  pause:6000,
    infiniteLoop: true,
    hideControlOnEnd: true,
    auto: true
});
});