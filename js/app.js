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


$(document).ready(function(){
  $(document).scroll(function(){
    if($(window).scrollTop() > 400){
      $("#mySkill").stop().animate ({
        opacity: '1',
        fontSize: "32px"

      });
    }
    else {
      $("#mySkill").stop().animate ({
        opacity: '0',
        fontSize: "20px"

      });
    }
  });
});

$(document).ready(function(){
  $(document).scroll(function(){
    if($(window).scrollTop() > 1000){
      $("#experiences").stop().animate ({
        opacity: '1',
        fontSize: "40px"

      });
    }
    else {
      $("#experiences").stop().animate ({
        opacity: '0',
        fontSize: "20px"

      });
    }
  });
});

$(document).ready(function(){
  $(document).scroll(function(){
    if($(window).scrollTop() > 1250){
      $("#project").stop().animate ({
        opacity: '1',
        fontSize: "40px"

      });
    }
    else {
      $("#project").stop().animate ({
        opacity: '0',
        fontSize: "20px"

      });
    }
  });
});
