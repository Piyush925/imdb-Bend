const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Delete Movies', () => {
    /*
     * Test the /DELETE Movies route
     */
    describe('/DELETE Movies', () => {
        it('it should not DELETE a movie without movieId field', (done) => {
            let data = {
                name: "AK",
            }
            chai.request(app)
                .delete('/deletemovies')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE Movies', () => {
        it('it should DELETE a movie', (done) => {
            let data = {
                movieId: 41,
            }
            chai.request(app)
                .delete('/deletemovies')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql('true')
                    res.body.data.should.be.a('object');
                    done();
                });
        });
    });
});