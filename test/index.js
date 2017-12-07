'use strict';

var should = require('chai').should();
var vertcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(vertcore.crypto);
    should.exist(vertcore.encoding);
    should.exist(vertcore.util);
    should.exist(vertcore.errors);
    should.exist(vertcore.Address);
    should.exist(vertcore.Block);
    should.exist(vertcore.MerkleBlock);
    should.exist(vertcore.BlockHeader);
    should.exist(vertcore.HDPrivateKey);
    should.exist(vertcore.HDPublicKey);
    should.exist(vertcore.Networks);
    should.exist(vertcore.Opcode);
    should.exist(vertcore.PrivateKey);
    should.exist(vertcore.PublicKey);
    should.exist(vertcore.Script);
    should.exist(vertcore.Transaction);
    should.exist(vertcore.URI);
    should.exist(vertcore.Unit);
  });
});
