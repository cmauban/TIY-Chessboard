console.log(game.tracer());

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


  it('should move exactly one piece', function () {

    //initialize the environment..
    game.reset(); //re-initialize the board
    var board = game.board();

    // test the pre-conditions..
    chai.expect(board[6][3]).to.equal('p');
    chai.expect(board[4][3]).to.be.null;

    function toTracer(rows){
      return rows.join('\n') + '\n';
    }

    chai.expect(game.tracer()).to.equal(toTracer([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '|p|p|p|p|p|p|p|p|',
      '|r|n|b|q|k|b|n|r|'
  ]));

    //Action to change..
    chai.expect(game.applyMove(
      // { file: 'd', rank: 2 },
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 } // to
    )).to.be.undefined;


    var board = game.board(); //re-copy the board

    // Post conditions
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.equal('p');

    // function toTracer(rows){
    //   return rows.join('\n') + '\n';
    // }

    function applyMove(rows){
      return rows.join('\n') + '\n';
    }

    chai.expect(game.tracer()).to.equal(toTracer([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | |p| | | | |',
      '| | | | | | | | |',
      '|p|p|p| |p|p|p|p|',
      '|r|n|b|q|k|b|n|r|'
  ]));

  }); //END it should move one piece


  it.skip('should tell me what piece is at a position', function(){
    chai.expect(game.pieceAt(6,3)).to.equal('p');
    chai.expect(game.pieceAt(4,3)).to.be.null;
    chai.expect(game.pieceAt(2,5)).to.equal('N');
    chai.expect(game.pieceAt(0,6)).to.be.null;
    chai.expect(game.pieceAt(0,0)).to.equal('R');
  });


  it('should be able to move a different piece', function() {
    //initialize environment
    game.reset();
    var board = game.board(); //grabs copy of the board

    // Test the Pre-condition
    chai.expect(board[0][6]).to.equal('N');
    chai.expect(board[2][5]).to.be.null;

    function toTracer(rows){
      return rows.join('\n') + '\n';
    }

  //   chai.expect(game.tracer()).to.equal(toTracer([
  //     '|R|N|B|Q|K|B|N|R|',
  //     '|P|P|P|P|P|P|P|P|',
  //     '| | | | | | | | |',
  //     '| | | | | | | | |',
  //     '| | | | | | | | |',
  //     '| | | | | | | | |',
  //     '|p|p|p|p|p|p|p|p|',
  //     '|r|n|b|q|k|b|n|r|'
  // ]));

    //for later...
    // var secondmove = moves[1] = {
  //     from: {rank: 0, file: 6},
  //     to: {rank:2, file: 5}
  // }


    //Action to change..
    chai.expect(game.applyMove(
      { rank: 0, file: 6 }, // from
      { rank: 2, file: 5 } // to
    )).to.be.undefined;

    var board = game.board(); //re-copy the board

    // Post conditions
    chai.expect(board[0][6]).to.be.null;
    chai.expect(board[2][5]).to.equal('N');

  //   chai.expect(game.tracer()).to.equal(toTracer([
  //     '|R|N|B|Q|K|B| |R|',
  //     '|P|P|P|P|P|P|P|P|',
  //     '| | | | | |N| | |',
  //     '| | | | | | | | |',
  //     '| | | | | | | | |',
  //     '| | | | | | | | |',
  //     '|p|p|p|p|p|p|p|p|',
  //     '|r|n|b|q|k|b|n|r|'
  // ]));


  });
  //
  //
  // it('should be able to apply the move', function() {
  //   var board = game.board();
  //   chai.expect(board).to.be.an('array');
  //   chai.expect(board[4][3]).to.be.a('string');
  //   chai.expect(board[4][3]).to.equal('p');
  // });

    console.log(game.applyMove()); //returns undefined


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
