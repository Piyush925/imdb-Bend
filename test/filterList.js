const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('GET dropdown options', () => {
    /*
     * Test the /GET options route
     */
    describe('/GET options', () => {
        it('it should not GET options with id greater than 4', (done) => {
            chai.request(app)
                .get('/getperson/5')
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/GET options', () => {
        it('it should GET options', (done) => {
            chai.request(app)
                .get('/getperson/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql('true')
                    res.body.should.be.a('object');
                    res.body.should.have.property('data')
                    done();
                });
        });
    });
});