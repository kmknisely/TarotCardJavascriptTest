/* Stacking card code*/

$('.stack').click(function() {

  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card");
    }, e * 150)

  });

});


/* Spreading card code */

$('.spread').click(function() {

  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150)

  });


});
