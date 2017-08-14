const should = require('should');
const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');
const snpModel = mongoose.model('serviceAndProduct');
const agent = request.agent(app);

describe("Functional test SNP controller", function () {
    afterEach((done) => {
        snpModel.remove().exec();
        done();
    });
    it("service and product info should has to be posted and return _id and createdAt", (done) => {
       const productPost = {
           "name" : "Biscuits",
           "type" : "goods",
           "units" : "pcs",
           "hsnCode" : "00000012",
           "value" : 15,
           "quantity" : 5,
           "rates" : 75,
           "taxRates" : 12
       };
       agent.post('/api/products')
           .send(productPost)
           .expect(200)
           .end((err, result) =>{
                result.body.should.have.property('createdAt');
                result.body.should.have.property('_id');
                done();
           })
    });
});
