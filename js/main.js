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
  var moves = [

    { from: { rank: 6, file: 3 },
      to: { rank: 4, file: 3 }
    },

    { from: { rank: 0, file: 6 },
      to: { rank: 2, file: 5 }
    }

    // [ [6,3], [0,6], [6,2], [1,4], [6,6], [1,3], [7,5], [0,5], [7,6] ], //from locations
    // [ [4,3], [2,5], [4,2], [2,4], [5,6], [3,3], [6,6], [1,4], [5,5] ] //to locations

  ]; // END moves


    // console.log(from[[0]], to[[0]]); //logging first value in both indexs

// var current = [];
// var counter = 0; //initial start

    //globals is an object. globals.game is assigned a dictionary
  // You don't need to understand `globals` yet...
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

      return this; //the object the function belongs too (game)

    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
    var counter = 0;
    var currentFrom = moves[0].from;
    var currentTo = moves[0].to;

    if (counter < moves.length) {
      counter += 1;
      currentFrom = moves[counter].from;
      currentTo = moves[counter].to;

      return this;
      }
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      --counter;
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
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
        console.log(rank, board[rank]);
        console.log('tracer function bullet');
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

      board[4][3] = board[6][3];
      board[6][3] = null;

      // board[2][5] = board[0][6];
      // board[0][6] = null;

      // console.log(board.join ('\n' + '|'));
      // return board.join('\n' + '|');



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
