const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Add Movies to Watchlist', () => {
    /*
     * Test the /POST Watchlist add route
     */
    describe('/POST addWatchlist', () => {
        it('it should not POST a movie to watchlist without movieId field', (done) => {
            let data = {
                name: "piyush"
            }
            chai.request(app)
                .post('/watchlist/add')
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
    describe('/POST watchFavlist', () => {
        it('it should not POST a movie to watchlist without token', (done) => {
            let data = {
                movieId: 15
            }
            chai.request(app)
                .post('/watchlist/add')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addWatchlist', () => {
        it('it should POST a movie to watchlist', (done) => {
            let data = {
                movieId: 15
            }
            chai.request(app)
                .post('/watchlist/add')
                .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU4NzI3MDk4MCwiZXhwIjoxNTg5ODYyOTgwfQ.VLlfW7P_5SpciAmQJJWXUF8OfnTIt6x_SGtL9sxFSZ0")
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