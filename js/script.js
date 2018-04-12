$(document).ready(function(){

  $(".toggleMobNav").click(function(){
    $(".toggleSection").slideToggle();
  });

  $(".menuItem").click(function(){
    $(".toggleSection").slideToggle();
  });

  // $(".toggleme").click(function(){
  //   $(".open").slideToggle();
  // });

  // ONLY COMPLETE THIS POPUP IF YOU HAVE TIME
  // $('#go').click(function(){go(50)});
  // $('#ok').click(function(){go(500)});

  //setTimeout(function(){go(50)},700);
  //setTimeout(function(){go(500)},2000);

  function go(nr) {
    $('.message').toggleClass('comein');
    $('.check').toggleClass('scaledown');
    $('#go').fadeToggle(nr);
  }

  $(document).ready( function() {
  var elm = $('#htop');
          function spin( vl ) {
            elm.val( parseInt( elm.val(), 10 ) + vl );
          }

          $('#increase').click( function() { spin( 1 );  } );
          $('#decrease').click( function() { spin( -1 ); } );
});

});
