const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Add Movies', () => {
    /*
     * Test the /POST movies route
     */
    describe('/POST addmovie', () => {
        it('it should not POST a movie without array actors field', (done) => {
            let data = {
                name: "Avengers",
                releaseYear: 2015,
                Actors: "Akshay",
                Actress: ["Ak"],
                director: "Pk",
                producer: "Pk"
            }
            chai.request(app)
                .post('/addmovie')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addmovie', () => {
        it('it should not POST a movie without producer field', (done) => {
            let data = {
                name: "Avengers",
                releaseYear: 2015,
                Actors: ["Akshay"],
                Actress: ["Ak"],
                director: "Pk",
            }
            chai.request(app)
                .post('/addmovie')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addmovie', () => {
        it('it should POST a movie', (done) => {
            let data = {
                name: "Avengers",
                releaseYear: 2015,
                Actors: ["Akshay"],
                Actress: ["Ak"],
                director: "Pk",
                producer: "Pk"
            }
            chai.request(app)
                .post('/addmovie')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.data.should.be.a('object')
                    res.body.should.have.property('success').eql('true')
                    done();
                });
        });
    });

});