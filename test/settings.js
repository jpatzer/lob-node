var chai    = require('chai');
var expect  = chai.expect;

var API_KEY = 'test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc';
var Lob     = require('../lib/index.js')(API_KEY);

describe('Settings', function () {
  describe('list', function () {
    it('should have correct defaults', function (done) {
      Lob.settings.list({ type: 1 }, function (err, res) {
        expect(res).to.have.property('object');
        expect(res).to.have.property('data');
        expect(res.data).to.be.instanceof(Array);
        expect(res.object).to.eql('list');
        done();
      });
    });

    it('should have optional options', function (done) {
      Lob.settings.list(function (err, res) {
        expect(res).to.have.property('object');
        expect(res).to.have.property('data');
        expect(res.data).to.be.instanceof(Array);
        expect(res.object).to.eql('list');
        done();
      });
    });
  });

  describe('retrieve', function () {
    it('should have correct defaults', function (done) {
      Lob.settings.retrieve('200', function (err, res) {
        expect(res.object).to.eql('setting');
        done();
      });
    });

    it('should fail with bad id', function (done) {
      Lob.settings.retrieve('9800', function (err) {
        expect(err.status_code).to.eql(404);
        done();
      });
    });
  });
});
