(function(globals){ // IIFE: Immediately Invoked Function Expression
})(window || module && module.exports || this);

(function(globals){ // IIFE: Immediately Invoked Function Expression
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */

  var counter = 0; //initialize the moves

  var moves = [

    { from: { rank: 6, file: 3 },
      to: { rank: 4, file: 3 } },

    { from: { rank: 0, file: 6 },
      to: { rank: 2, file: 5 } },

    { from: { rank: 6, file: 2 },
      to: { rank: 4, file: 2 } },

    { from: { rank: 1, file: 4 },
      to: { rank: 2, file: 4 } },

    { from: { rank: 6, file: 6 },
      to: { rank: 5, file: 6 } },

    { from: { rank: 1, file: 3 },
      to: { rank: 3, file: 3 } },

    { from: { rank: 7, file: 5 },
      to: { rank: 6, file: 6 } },

    { from: { rank: 0, file: 5 },
      to: { rank: 1, file: 4 } },

    { from: { rank: 7, file: 6 },
      to: { rank: 5, file: 5 } }

  ]; // END moves


  //globals is an object. globals.game is assigned a dictionary
  var game = (globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){ //defines game.board
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){ //the reset object belongs to the game object
      board = initial(); //just board
      console.log(game.tracer()); //invokes the reset in console with button
      return this; //the object the function belongs too (game)
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){

    var currentFrom = moves[counter].from; //assigns currentFrom to the current position of 'from' moves
    var currentTo = moves[counter].to;

    if (counter <= moves.length) { //if counter is less than 9 moves
      counter += 1; //add one to the counter
      game.applyMove(currentFrom, currentTo); //calls the applyMove function
    } else {
      counter = 9; //stop at last move
    }
      return this; //returns current object
    },



    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      var currentFrom = moves[counter].from; //assigns currentFrom to the current position of from moves
      var currentTo = moves[counter].to;

      if (counter >= 0) { //if counter is greater or less than 0..
        counter -= 1; // go back one move
        game.applyMove(currentTo, currentFrom); //calls the apply move function
      } else {
        counter = 0;
      }
      return this; //returns current object
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){

      for (counter = 0; counter < moves.length; counter++ ){ //iterating through each move
        var currentFrom = moves[counter].from; //applying each 'from' move
        var currentTo = moves[counter].to; //applying each 'to' move

        game.applyMove(currentFrom, currentTo); //calling all of the moves
      }

      console.log(game.tracer()); //invokes the end function in the console with button
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
  //  key:value
    tracer: function(){
      var bullet = '';
      //creates a block of statements
      for ( var rank = 0; rank < board.length; rank++ ){
        // console.log(rank, board[rank]);
      }

      for ( rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! .
     ..and remove this comment.
     */


    applyMove: function(from, to){

      board[to.rank][to.file] = board[from.rank][from.file]; //to is assigned from position
      board[from.rank][from.file] = null; //from is assigned null

      console.log(game.tracer(game.applyMove)); //invokes applyMove. in the console with controller

      // board[4][3] = board[6][3];
      // board[6][3] = null;
      //
      // board[2][5] = board[0][6];
      // board[0][6] = null;

    }// END applyMove

  }); // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
