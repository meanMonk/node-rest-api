const should = require('should');
const sinon = require('sinon');

describe(">>Snp controller test", () => {
    describe("\n >> Test for the post methods", () => {
        it("\n >> should not allow an empty Name on post request", function () {
            const Book = function () { this.save = () => {} };
            const req = {
                body : {
                    unit : 'kg',
                    type :  'goods'
                }
            };
            const res = {
                status : sinon.spy(),
                send : sinon.spy()
            };
            const snpController = require('./snp.controller')(Book);

            snpController.createProduct(req, res);

            res.status.calledWith(400).should.equal(true, `bad status ${res.status}`);
            res.send.calledWith('Name is required').should.equal(true);

        })
    });
});