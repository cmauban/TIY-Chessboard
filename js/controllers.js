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

var clickCounter = 0;

  // Controller for "next move"...
jQuery('#next').on('click', function(event){

      console.log('next move');
      game.next(); //LOGS/APPLIES NEXT MOVE: Tell the Model -- `game` -- to advance to the next move...
      event.preventDefault();
      // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      clickCounter += 1;

      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){


      if (clickCounter === 1) {
        $('tr.row-2 td:eq(3)').removeClass('wppawn'); //targets 3rd element from tr.row-2
        $('tr.row-4 td:eq(3)').addClass('wppawn');
      }

      if (clickCounter === 2) {
        $('tr.row-8 td:eq(6)').removeClass('bpknight');
        $('tr.row-6 td:eq(5)').addClass('bpknight');
      }

      if (clickCounter === 3) {
        $('tr.row-2 td:eq(2)').removeClass('wppawn');
        $('tr.row-4 td:eq(2)').addClass('wppawn');
      }

      if (clickCounter === 4) {
        $('tr.row-7 td:eq(4)').removeClass('bppawn');
        $('tr.row-6 td:eq(4)').addClass('bppawn');
      }

      if (clickCounter === 5) {
        $('tr.row-2 td:eq(6)').removeClass('wppawn');
        $('tr.row-3 td:eq(6)').addClass('wppawn');
      }

      if (clickCounter === 6) {
        $('tr.row-7 td:eq(3)').removeClass('bppawn');
        $('tr.row-5 td:eq(3)').addClass('bppawn');
      }

      if (clickCounter === 7) {
        $('tr.row-1 td:eq(5)').removeClass('wpbishop');
        $('tr.row-2 td:eq(6)').addClass('wpbishop');
      }

      if (clickCounter === 8) {
        $('tr.row-8 td:eq(5)').removeClass('bpbishop');
        $('tr.row-7 td:eq(4)').addClass('bpbishop');
      }

      if (clickCounter === 9) {
        $('tr.row-1 td:eq(6)').removeClass('wpknight');
        $('tr.row-3 td:eq(5)').addClass('wpknight');
      }


      });
   });
});



  // Controller for "previous move"...
jQuery('#previous').on('click', function(event){
      console.log('previous move'); // TODO: Fire tracer bullet!
      game.prev(); // TODO: Tell the Model -- `game` -- to advance to the previous move...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
jQuery('#fast-forward').on('click', function(event){
      console.log('end game yas!');
      game.end(); //Tell the Model -- `game` -- to advance to the last move...

      // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){

          if (piece === 'p') {
            $('tr.row-2 td:eq(3)').removeClass('wppawn');
            $('tr.row-4 td:eq(3)').addClass('wppawn');
          }

          if (piece === 'N') {
            $('tr.row-8 td:eq(6)').removeClass('bpknight');
            $('tr.row-6 td:eq(5)').addClass('bpknight');
          }

          if (piece === 'p') {
            $('tr.row-2 td:eq(2)').removeClass('wppawn');
            $('tr.row-4 td:eq(2)').addClass('wppawn');
          }

          if (piece === 'P') {
            $('tr.row-7 td:eq(4)').removeClass('bppawn');
            $('tr.row-6 td:eq(4)').addClass('bppawn');
          }

          if (piece === 'p') {
            $('tr.row-2 td:eq(6)').removeClass('wppawn');
            $('tr.row-3 td:eq(6)').addClass('wppawn');
          }

          if (piece === 'P') {
            $('tr.row-7 td:eq(3)').removeClass('bppawn');
            $('tr.row-5 td:eq(3)').addClass('bppawn');
          }

          if (piece === 'b') {
            $('tr.row-1 td:eq(5)').removeClass('wpbishop');
            $('tr.row-2 td:eq(6)').addClass('wpbishop');
          }

          if (piece === 'B') {
            $('tr.row-8 td:eq(5)').removeClass('bpbishop');
            $('tr.row-7 td:eq(4)').addClass('bpbishop');
          }

          if (piece === 'n') {
            $('tr.row-1 td:eq(6)').removeClass('wpknight');
            $('tr.row-3 td:eq(5)').addClass('wpknight');
          }

      });
    });

}); //END OF FAST-FORWARD BUTTON

  // Controller for anything else...
jQuery('#reset').on('click', function(event){
      console.log('backward');  // Fire tracer bullet!
      game.reset(); // Tell the Model -- `game` -- to do something it knows how to do...
      // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){

          if (piece === 'p') {
            $('tr.row-4 td:eq(3)').removeClass('wppawn');
            $('tr.row-2 td:eq(3)').addClass('wppawn');
          }

          if (piece === 'N') {
            $('tr.row-6 td:eq(5)').removeClass('bpknight');
            $('tr.row-8 td:eq(6)').addClass('bpknight');
          }

          if (piece === 'p') {
            $('tr.row-2 td:eq(2)').addClass('wppawn');
            $('tr.row-4 td:eq(2)').removeClass('wppawn');
          }

          if (piece === 'P') {
            $('tr.row-7 td:eq(4)').addClass('bppawn');
            $('tr.row-6 td:eq(4)').removeClass('bppawn');
          }

          if (piece === 'p') {
            $('tr.row-2 td:eq(6)').addClass('wppawn');
            $('tr.row-3 td:eq(6)').removeClass('wppawn');
          }

          if (piece === 'P') {
            $('tr.row-7 td:eq(3)').addClass('bppawn');
            $('tr.row-5 td:eq(3)').removeClass('bppawn');
          }

          if (piece === 'b') {
            $('tr.row-1 td:eq(5)').addClass('wpbishop');
            $('tr.row-2 td:eq(6)').removeClass('wpbishop');
          }

          if (piece === 'B') {
            $('tr.row-8 td:eq(5)').addClass('bpbishop');
            $('tr.row-7 td:eq(4)').removeClass('bpbishop');
          }

          if (piece === 'n') {
            $('tr.row-1 td:eq(6)').addClass('wpknight');
            $('tr.row-3 td:eq(5)').removeClass('wpknight');
          }


    });
  });
});

// Am I supposed to recognize this?
})(window || module && module.exports || this);
