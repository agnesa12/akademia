$(document).ready(function(){
    $(".wrapper").on("click", function() {
      if($(".navbar .container>div").css("opacity") == "0") {
        $(".navbar .container>div").css("opacity", "1");
        $(".navbar2 .first").css("transform","translateY(13px) rotate(45deg)")
        $(".navbar2 .second").css("opacity","0")
        $(".navbar2 .third").css("transform","translateY(-13px) rotate(-45deg)")

      }
      else{
        $(".navbar .container>div").css("opacity","0");
        $(".navbar2 .first").css("transform","translateY(0) rotate(0)")
        $(".navbar2 .second").css("opacity","1")
        $(".navbar2 .third").css("transform","translateY(0) rotate(0)")
      }
    });
});
  $(document).ready(function(){
    $('.slider2').slick({
        slidesToShow: 1,
        dots:true,
        arrows:false
      });
  })