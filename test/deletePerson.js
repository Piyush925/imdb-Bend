const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Delete Persons', () => {
    /*
     * Test the /DELETE persons route
     */
    describe('/DELETE Person', () => {
        it('it should not DELETE a person without roleId field', (done) => {
            let data = {
                name: "AK",
            }
            chai.request(app)
                .delete('/deleteperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE Person', () => {
        it('it should not POST a person without name field', (done) => {
            let data = {
                roleId: 1,
            }
            chai.request(app)
                .delete('/deleteperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE Person', () => {
        it('it should not POST a person without number roleId field', (done) => {
            let data = {
                name: "Avengers",
                roleId: "A12"
            }
            chai.request(app)
                .delete('/deleteperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE Person', () => {
        it('it should not DELETE a person without roleId less than equal 4', (done) => {
            let data = {
                name: "Avengers",
                roleId: "5"
            }
            chai.request(app)
                .delete('/deleteperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/DELETE Person', () => {
        it('it should DELETE a person', (done) => {
            let data = {
                name: "Avengers",
                roleId: 1,
            }
            chai.request(app)
                .delete('/deleteperson')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql('true')
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});