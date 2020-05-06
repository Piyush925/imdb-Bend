const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('GET filtered movies', () => {
    /*
     * Test the /GET movies route
     */
    describe('/GET movies', () => {
        it('it should not GET movies without array of actor', (done) => {
            chai.request(app)
                .get('/getmovies/query?actor="A"&actress=["Ak"]&director="piyush"&producer="piyush"')
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/GET movies', () => {
        it('it should not GET movies without array of actress', (done) => {
            chai.request(app)
                .get('/getmovies/query?actor=["Akshay"]&actress="Ak"&director="piyush"&producer="piyush"')
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/GET movies', () => {
        it('it should GET movies', (done) => {
            chai.request(app)
                .get('/getmovies/query?actor=["Akshay"]&actress=["kiara"]&director="piyush"&producer="piyush"')
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