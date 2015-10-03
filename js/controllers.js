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

// var piece = $('')

  // Controller for "next move"...
  jQuery('#next').on('click', function(event){
      console.log('next move');
      game.next(); //LOGS/APPLIES NEXT MOVE: Tell the Model -- `game` -- to advance to the next move...

      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){

          var $square = $chessboard
            .find('tr').eq(6) // Get the `tr` inside the `chessboard` for the `rank`
            .find('td').eq(3);

          var $tosquare = $chessboard
            .find('tr').eq(4)
            .find('td').eq(3);

      if (piece === 'p')
        $square.removeClass('wppawn');
        $tosquare.addClass('wppawn');



          var $square = $chessboard
            .find('tr').eq(0)
            .find('td').eq(6);

          var $tosquare = $chessboard
            .find('tr').eq(2)
            .find('td').eq(5);

      if (piece === 'N')
        $square.removeClass('bpknight');
        $tosquare.addClass('bpknight');


   //
  //     // $('td:eq(6)').removeClass('bpknight');
  //     // $square.removeClass('wppawn');
   //
  //     // if (piece) $square.text(piece)
  //     //   .addClass('wppawn'); //convert square to class name
  //     //   // $square.removeClass(''); //add names to td instead
  //     //
  //     // if (piece) $square.get('N');
  //     //   $square.addClass('bpknight'); //convert square to class name
  //       // $square.removeClass('wppawn'); //add names to td instead
   //
   //
      });
   });
});
     // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`


  // Controller for "previous move"...
  jQuery('#previous').on('click', function(event){
      console.log('previous move'); // TODO: Fire tracer bullet!
      game.prev(); // TODO: Tell the Model -- `game` -- to advance to the previous move...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('#fast-forward').on('click', function(event){
      console.log('end game yas!');
      game.end();
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('#reset').on('click', function(event){
      console.log('backward');  // Fire tracer bullet!
      game.reset();
        // chessboard.reset(); // TODO: Tell the Model -- `game` -- to do something it knows how to do...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
