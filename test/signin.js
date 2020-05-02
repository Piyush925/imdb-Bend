const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Signin', () => {
    /*
     * Test the /PUT signin route
     */
    describe('/PUT signin', () => {
        it('it should not Login a user without email field', (done) => {
            let data = {
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user without valid email field', (done) => {
            let data = {
                email: "a",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user without password field', (done) => {
            let data = {
                email: "pk123455126@g.com",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user without password length less than 6 field', (done) => {
            let data = {
                email: "pk1234556@g.com",
                password: "122",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user with wrong password', (done) => {
            let data = {
                email: "r1@g.co",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error').eql('Wrong Password')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user with wrong role', (done) => {
            let data = {
                email: "r1@g.co",
                password: "1234567890",
                role: "admin"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error').eql('Invalid role')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user without signup', (done) => {
            let data = {
                email: "r1@g123456.co",
                password: "1234567890",
                role: "admin"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error').eql('User Not Found')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user without role field', (done) => {
            let data = {
                email: "pk1234556@g.com",
                password: "1234Asfshkj@"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should not Login a user with number user field', (done) => {
            let data = {
                email: "pk1234556@g.com",
                password: "123456789",
                role: 12
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/PUT signin', () => {
        it('it should Login a user', (done) => {
            let data = {
                email: "r1@g.co",
                password: "1234567890",
                role: "user"
            }
            chai.request(app)
                .put('/login')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql('true')
                    res.body.should.have.property('data').length.should.not.be.eql('0')
                    done();
                });
        });
    });

});