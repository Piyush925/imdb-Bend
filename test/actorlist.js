const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Actorlist', () => {
    /*
     * Test the /GET actorlist route
     */
    describe('/GET actorList', () => {
        it('it should GET all the actors', (done) => {
            chai.request(app)
                .get('/getactor')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.data.should.be.a('array');
                    res.body.should.have.property('success').eql('true')
                    done();
                });
        });
    });

});