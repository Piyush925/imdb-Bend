const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('GET List', () => {
    /*
     * Test the /GET List route
     */
    describe('/GET List', () => {
        it('it should GET List', (done) => {
            chai.request(app)
                .get('/getlist/name')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql('true')
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });
});