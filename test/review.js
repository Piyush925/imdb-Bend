const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Submit review', () => {
    /*
     * Test the /PUT review route
     */
    describe('/PUT review', () => {
        it('it should not PUT review without movieId field', (done) => {
            let data = {

                review: "Very nice movie"
            }
            chai.request(app)
                .put('/review')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT review', () => {
        it('it should not PUT review without review field', (done) => {
            let data = {
                movieId: 13
            }
            chai.request(app)
                .put('/review')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT review', () => {
        it('it should not PUT review without number movieId field', (done) => {
            let data = {
                movieId: "Ak",
                review: "Actions movie"
            }
            chai.request(app)
                .put('/review')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT review', () => {
        it('it should not PUT review without string review field', (done) => {
            let data = {
                movieId: 13,
                review: 12
            }
            chai.request(app)
                .put('/review')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT review', () => {
        it('it should PUT review', (done) => {
            let data = {
                movieId: 13,
                review: "Action moview"
            }
            chai.request(app)
                .put('/review')
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