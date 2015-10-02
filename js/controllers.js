(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){

    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  // }
var $chessboard = $('.chessboard tbody');

var gameboard = game.board();

  // Controller for "next move"...
  jQuery('#next').on('click', function(event){
      console.log('next move');
      game.next(); //LOGS NEXT MOVE       // TODO: Tell the Model -- `game` -- to advance to the next move...


});
     // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
//      jQuery(gameboard).each(function(rank,row){
//        jQuery(row).each(function(file, piece){
//
//        var $square = $chessboard
//          .find('tr').eq(rank)
//          .find('td').eq(file);
//
//        console.log($square.get(),rank,file,piece);
//
//        if (piece) $square.text(piece);
//          $chessboard[4][3].addClass('wppawn');
//          $chessboard[6][3].removeClass('wppawn');
//
//      });
// });

  // Controller for "previous move"...
  jQuery('#previous').on('click', function(event){
      console.log('previous move'); // TODO: Fire tracer bullet!
      game.prev(); // TODO: Tell the Model -- `game` -- to advance to the previous move...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('#fast-forward').on('click', function(event){
      alert('fast-forward');
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('#reset').on('click', function(event){
      alert('backward');  // Fire tracer bullet!

        chessboard.reset(); // TODO: Tell the Model -- `game` -- to do something it knows how to do...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
