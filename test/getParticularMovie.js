const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('GET ParticularMovies', () => {
    /*
     * Test the /GET ParticularMovies route
     */
    describe('/GET Movies', () => {
        it('it should GET a movie', (done) => {
            chai.request(app)
                .get('/getmovie/23')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql('true')
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });
});