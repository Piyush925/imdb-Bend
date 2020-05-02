const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Add Persons', () => {
    /*
     * Test the /POST addperson route
     */
    describe('/POST addPerson', () => {
        it('it should not POST a person without roleId field', (done) => {
            let data = {       
        name: "AK",
        age: 30
            }
            chai.request(app)
                .post('/addperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addPerson', () => {
        it('it should not POST a person without name field', (done) => {
            let data = {
                roleId: 1,
                age: 30
            }
            chai.request(app)
                .post('/addperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addPerson', () => {
        it('it should not POST a person without number roleId field', (done) => {
            let data = {
                name: "Avengers",
                roleId : "A12"
            }
            chai.request(app)
                .post('/addperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST addPerson', () => {
        it('it should POST a person', (done) => {
            let data = {
                name: "Avengers",
                roleId : 1,
                age : 30
            }
            chai.request(app)
                .post('/addperson')
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