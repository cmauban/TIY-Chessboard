var test = ('mocha').it,
  expect = ('chai').expect;

// test('initial', function(){
//     expect(initial('R')).to.equal([0,0]);
//       expect(initial([0,1])).to.be.a('N');

console.log(game.tracer());
// });

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
}


//data collected from game


// What kind of thing is game.board...? What does it do?
//  How about game.reset? What does it return? Any side-effects?
//  Resetting a board with no moves is lame, HOW U EVEN game.applyMove?
//  First move is free, next one costs $10.
//  Just calling game.applyMove is cheating; game.next...!
//  Now that you've got some moves, maybe game.reset is more interesting?
//  You can game.next but can you game.prev...?
//  Y'know, game.end is really a lot of game.next...
//  That game.play, tho... How U even setInterval?

/* 1. need to initalize the board (array)
     - create variables for default settings
     - size of board: 8x8
     - colors?
     - initial positions of pieces
     - set the board
   2. Make a move
   3. Validate the move

*/
