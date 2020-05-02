const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Add Movies', () => {
    /*
     * Test the /PUT rating route
     */
    describe('/PUT rating', () => {
        it('it should not PUT rating without movieId field', (done) => {
            let data = {

                rating: 8
            }
            chai.request(app)
                .put('/rating')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT rating', () => {
        it('it should not PUT rating without rating field', (done) => {
            let data = {
                movieId: 13
            }
            chai.request(app)
                .put('/rating')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT rating', () => {
        it('it should not PUT rating without number movieId field', (done) => {
            let data = {
                movieId: "Ak",
                rating: 8
            }
            chai.request(app)
                .put('/rating')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT rating', () => {
        it('it should not PUT rating without number rating field', (done) => {
            let data = {
                movieId: 13,
                rating: "ahj"
            }
            chai.request(app)
                .put('/rating')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT rating', () => {
        it('it should PUT rating', (done) => {
            let data = {
                movieId: 13,
                rating: 8
            }
            chai.request(app)
                .put('/rating')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.data.should.be.a('array')
                    res.body.should.have.property('success').eql('true')
                    done();
                });
        });
    });

});