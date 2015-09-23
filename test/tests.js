console.log('tracer bullet!!!!!!');

var test = ('mocha').it,
  expect = ('chai').expect;

  test('initialize the board', function(){

    // expect(game.board).to.exist;
    // expect(game.board).to.equal(false);
    // expect(game.board("zero")).to.equal();
});



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
