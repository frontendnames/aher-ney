$(document).ready(function(){

jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
    $(".play-btn").click(function() {
      var video = $(this)
        .closest(".position-relative")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
 });




});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

// Обработчик клика по бургеру
burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
});