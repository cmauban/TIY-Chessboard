// var test = ('mocha').it,
//   expect = ('chai').expect;
//
//
//
// console.log(game.tracer());
// console.log(game.board());


(function(globals) {


  it('should have a `game` in the `window`', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).is.an('object');
    chai.expect(game.board).to.a('function');
  });


  it('should give me a big array as the board', function () {
    var board = game.board();

    chai.expect(board).to.be.an('array');
    chai.expect(board).to.have.length(8);
    chai.expect(board[0]).to.be.a('array');
    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');
  });

  it('should be able to move pieces', function () {
    // board[0][0] = board[0][1];
    game.applyMove(
      // { file: 'd', rank: 2 },
      { rank: 6, to: 3 }, // from
      // { file: 'd', rank: 4 }
      { rank: 4, to: 3 } // to
    );

    var board = game.board();

    chai.expect(board[6][3]).to.be.equal(null);
    chai.expect(board[4][3]).to.be.equal('p');


});


// it('should be able to fast forward', function () {
//   board[0][0] = board[0][1];
//
// });
//
// it.skip('should be able to advance to the next move', function () { //skips the test
//
//
// });


})(window || module && module.exports || this);
