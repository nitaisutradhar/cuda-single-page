$(document).ready(function(){

  // STICKY MENU (google search -> jquery waypoints > Github + DOWNLOAD)
  $(".js--services-section").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    }else {
      $("nav").removeClass("sticky");
    }
  });
  //MIXITUP (PORTFOLIO SECTION)
  var mixer = mixitup('.container');

  //SMOOTH SCROLL FOR IE/EDGE/SAFARI

   $("#").on('click',function(event){
     if (this.hash !== ""){
       event.preventDefault();
       var hash = this.hash;
       $('html,body').animate({
         scrollTop: $(hash).offset().top
       },800,function(){
         window.lacation.hash=hash;
       });
     }
   });

});
function openNav() {
  document.getElementById("myNav").style.width= "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width= "0%";
}
// HOW TO DOWNLOAD
// script.net< animated radial progress bars
$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");
