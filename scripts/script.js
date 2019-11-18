// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);













// End of Your Code . Don't delete that line below!!
});