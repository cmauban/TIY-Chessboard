;(function(globals){ // That damn IIFE again!
// Your code BELOW here...

  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  var gameboard = game.board();


  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file); // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);


      // if (piece) $square.text(piece);



        // Convert `square` to class name(s)

        if (piece === 'p') {
          $square.addClass('wppawn');
        }

        if (piece === 'r') {
          $square.addClass('wprook');
        }

        if (piece === 'n') {
          $square.addClass('wpknight');
        }

        if (piece === 'b') {
          $square.addClass('wpbishop');
        }

        if (piece === 'q') {
          $square.addClass('wpqueen');
        }

        if (piece === 'k') {
          $square.addClass('wpking');
        } //END WHITE PIECES


        if (piece === 'P') {
          $square.addClass('bppawn');
        } //START BLACK PIECES

        if (piece === 'R') {
          $square.addClass('bprook');
        }

        if (piece === 'N') {
          $square.addClass('bpknight');
        }

        if (piece === 'B') {
          $square.addClass('bpbishop');
        }

        if (piece === 'Q') {
          $square.addClass('bpqueen');
        }

        if (piece === 'K') {
          $square.addClass('bpking');
        } //END BLACK PIECES



        // TODO: Add class name(s) to `td` instead
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
