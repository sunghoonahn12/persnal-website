$(document).ready(function(){
  $(document).scroll(function(){
    if($(window).scrollTop() > 100){
      $(".navbar").addClass("backgroundColor");
    }
    else {
      $(".navbar").removeClass("backgroundColor");
      $(".navbar").addClass("navbar");
    }
  });
});
