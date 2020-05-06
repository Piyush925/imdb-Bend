const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('GET Movies from watchlist', () => {
    /*
     * Test the /GET watchlist route
     */
    describe('/GET movie from watchlist', () => {
        it('it should not GET a movie from watchlist without token', (done) => {
            chai.request(app)
                .get('/watchlist/get')
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/GET movie from watchlist', () => {
        it('it should GET movies from watchlist', (done) => {
            chai.request(app)
                .get('/watchlist/get')
                .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU4NzI3MDk4MCwiZXhwIjoxNTg5ODYyOTgwfQ.VLlfW7P_5SpciAmQJJWXUF8OfnTIt6x_SGtL9sxFSZ0")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data').should.be.a('object')
                    res.body.should.have.property('success').eql('true')
                    done();
                });
        });
    });

});