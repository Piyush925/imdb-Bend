const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('DELETE Movies from Watchlist', () => {
    /*
     * Test the /DELETE watchlist route
     */
    describe('/DELETE movie from watchlist', () => {
        it('it should not DELETE a movie from watchlist without movieId field', (done) => {
            let data = {
                name: "piyush"
            }
            chai.request(app)
                .delete('/watchlist/delete')
                .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU4NzI3MDk4MCwiZXhwIjoxNTg5ODYyOTgwfQ.VLlfW7P_5SpciAmQJJWXUF8OfnTIt6x_SGtL9sxFSZ0")
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE movie from watchlist', () => {
        it('it should not DELETE a movie from watchlist without token', (done) => {
            let data = {
                movieId: 15
            }
            chai.request(app)
                .delete('/watchlist/delete')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE movie from watchlist', () => {
        it('it should DELETE a movie from watchlist', (done) => {
            let data = {
                movieId: 15
            }
            chai.request(app)
                .delete('/watchlist/delete')
                .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU4NzI3MDk4MCwiZXhwIjoxNTg5ODYyOTgwfQ.VLlfW7P_5SpciAmQJJWXUF8OfnTIt6x_SGtL9sxFSZ0")
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql('true')
                    done();
                });
        });
    });

});