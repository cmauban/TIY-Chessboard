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

var gameboard = game.board(); //representation of the gameboard

var clickCounter = 0; //initializes the click



  // Controller for "next move"...
jQuery('#next').on('click', function(event){
      // console.log('next move');
      game.next(); // invokes next function. LOGS/APPLIES NEXT MOVE: Tell the Model -- `game` -- to advance to the next move...
      event.preventDefault();

      // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      clickCounter += 1; //intervals by one

      jQuery(gameboard).each(function(rank, row){ //iterates through gameboard
        jQuery(row).each(function(file, piece){


      if (clickCounter === 1) { //on first click..
        $('tr.row-2 td:eq(3)').removeClass('wppawn'); //targets 3rd element from second row and removes its piece
        $('tr.row-4 td:eq(3)').addClass('wppawn'); //..and adds the piece to the new position
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

      if (clickCounter >= 9) {
        clickCounter = 9;
      }



      });
   });  console.log(clickCounter);
}); // END NEXT CONTROLLER




  // Controller for "previous move"...
jQuery('#previous').on('click', function(event){
      // console.log('previous move');
      game.prev(); // Tell the Model -- `game` -- to advance to the previous move...

    //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`

    clickCounter -= 1; //intervals by one

    jQuery(gameboard).each(function(rank, row){ //iterates through gameboard
      jQuery(row).each(function(file, piece){


    if (clickCounter === 0) { //on first click..
      $('tr.row-2 td:eq(3)').addClass('wppawn'); //targets 3rd element from second row and adds piece
      $('tr.row-4 td:eq(3)').removeClass('wppawn'); //targets 3rd element from forth row and removes its piece
    }

    if (clickCounter === 1) {
      $('tr.row-8 td:eq(6)').addClass('bpknight');
      $('tr.row-6 td:eq(5)').removeClass('bpknight');
    }

    if (clickCounter === 2) {
      $('tr.row-2 td:eq(2)').addClass('wppawn');
      $('tr.row-4 td:eq(2)').removeClass('wppawn');
    }

    if (clickCounter === 3) {
      $('tr.row-7 td:eq(4)').addClass('bppawn');
      $('tr.row-6 td:eq(4)').removeClass('bppawn');
    }

    if (clickCounter === 4) {
      $('tr.row-2 td:eq(6)').addClass('wppawn');
      $('tr.row-3 td:eq(6)').removeClass('wppawn');
    }

    if (clickCounter === 5) {
      $('tr.row-7 td:eq(3)').addClass('bppawn');
      $('tr.row-5 td:eq(3)').removeClass('bppawn');
    }

    if (clickCounter === 6) {
      $('tr.row-1 td:eq(5)').addClass('wpbishop');
      $('tr.row-2 td:eq(6)').removeClass('wpbishop');
    }

    if (clickCounter === 7) {
      $('tr.row-8 td:eq(5)').addClass('bpbishop');
      $('tr.row-7 td:eq(4)').removeClass('bpbishop');
    }

    if (clickCounter === 8) {
      $('tr.row-1 td:eq(6)').addClass('wpknight');
      $('tr.row-3 td:eq(5)').removeClass('wpknight');
    }

    if (clickCounter >= 9) {
      clickCounter = 9;
    }

    });
  });
}); //END PREVIOUS CONTROLLER




  // Controller for "fast-forward"...
jQuery('#fast-forward').on('click', function(event){
      console.log('end game, yas!');
      game.end(); //Tell the Model -- `game` -- to advance to the last move...

      //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){

          if (piece === 'p') { // all pieces moves at once
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
}); //END OF FAST-FORWARD CONTROLLER



  // Controller for reset
jQuery('#reset').on('click', function(event){
      // console.log('backward');
      game.reset(); // Tell the Model -- `game` -- to do something it knows how to do...

      // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      jQuery(gameboard).each(function(rank, row){
        jQuery(row).each(function(file, piece){

          if (piece === 'p') { // all pieces move back to initial position at once
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
}); //END OF RESET CONTROLLER

// Am I supposed to recognize this?
})(window || module && module.exports || this);
