var path = require('path');
var Nightmare = require('nightmare');
var should = require('should');

describe('Nightmare demo', function () {
    this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds

    var url = 'http://localhost:4000';

    describe('Start page', function () {
      it('should show form when loaded', function (done) {
        new Nightmare()
        .goto(url)
        .evaluate(function () {
          return document.querySelectorAll('form').length;
        }, function (result) {
          result.should.equal(1);
          done();
        })
        .run();
      });
    });

    describe('Send form', function () {
      it('should print the posted string on submit', function (done) {
        var expected = 'teste';

        new Nightmare()
        .goto(url)
        .type('input[name="test"]', expected)
        .click('input[type="submit"]')
        .wait()
        .evaluate(function () {
          return document.querySelector('#result');
        }, function (element) {
          element.innerText.should.equal(expected);
          done();
        })
        .run();
      });

      it('should print "nothing" on submit if no string were provided', function (done) {
        var expected = 'nothing';

        new Nightmare()
        .goto(url)
        .click('input[type="submit"]')
        .wait()
        .evaluate(function () {
          return document.querySelector('#result');
        }, function (element) {
          element.innerText.should.equal(expected);
          done();
        })
        .run();
      });
    });
  });