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

var counter = 0;
// var piece = $('')

  // Controller for "next move"...
  jQuery('#next').on('click', function(event){


      console.log('next move');
      game.next(); //LOGS/APPLIES NEXT MOVE: Tell the Model -- `game` -- to advance to the next move...


      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){
          event.preventDefault();
          counter ++;


      // $(this).after(++count);

      if (piece === 'p') {
        $('td.oneF').removeClass('wppawn');
        $('td.oneT').addClass('wppawn');
      }

      if (piece === 'N') {
        $('td.twoF').removeClass('bpknight');
        $('td.twoT').addClass('bpknight');
      }

      if (piece === 'p') {
        $('td.threeF').removeClass('wppawn');
        $('td.threeT').addClass('wppawn');
      }

      if (piece === 'P') {
        $('td.fourF').removeClass('bppawn');
        $('td.fourT').addClass('bppawn');
      }

      if (piece === 'p') {
        $('td.fiveF').removeClass('wppawn');
        $('td.fiveT').addClass('wppawn');
      }

      if (piece === 'P') {
        $('td.sixF').removeClass('bppawn');
        $('td.sixT').addClass('bppawn');
      }

      if (piece === 'b') {
        $('td.sevenF').removeClass('wpbishop');
        $('td.sevenT').addClass('wpbishop');
      }

      if (piece === 'B') {
        $('td.eightF').removeClass('bpbishop');
        $('td.eightT').addClass('bpbishop');
      }

      if (piece === 'n') {
        $('td.nineF').removeClass('wpknight');
        $('td.nineT').addClass('wpknight');
      }



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
        // $chessboard.reset(); // TODO: Tell the Model -- `game` -- to do something it knows how to do...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
