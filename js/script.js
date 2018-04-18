$(document).ready(function(){
  $(".toggleMobNav").click(function(){
    $(".toggleSection").slideToggle();
  });
  $(".menuItem").click(function(){
    $(".toggleSection").slideToggle();
  });

  $("#go").click(function(){go(50)});
  $("#ok").click(function(){go(500)});

  function go(nr){
    $(".bb").fadeToggle(200);
    $(".message").toggleClass("comein");
    $(".check").toggleClass("scaledown");
    $("#go").fadeToggle(nr);
  };


});
