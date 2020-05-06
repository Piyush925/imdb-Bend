const app = require('../App')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Signup', () => {
    /*
     * Test the /POST signup route
     */
    describe('/POST signup', () => {
        it('it should not POST a user without firstName field', (done) => {
            let data = {
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user with number firstName field', (done) => {
            let data = {
                firstName: 122,
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user without email field', (done) => {
            let data = {
                firstName: "piyush",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user with existing email or without unique email field', (done) => {
            let data = {
                firstName: "Pk",
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "1234Asfshkj@",
                role: 'user'
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user without valid Email field', (done) => {
            let data = {
                firstName: "Pk",
                lastName: "Hello",
                email: "pk1234556",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user without password field', (done) => {
            let data = {
                firstName: "Pk",
                lastName: "Hello",
                email: "pk123455126@g.com",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user without password length less than 6 field', (done) => {
            let data = {
                firstName: "Pk",
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "122",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user without role field', (done) => {
            let data = {
                firstName: "Pk",
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "1234Asfshkj@"
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should not POST a user with number user field', (done) => {
            let data = {
                firstName: "PK",
                lastName: "Hello",
                email: "pk1234556@g.com",
                password: "123456789",
                role: 12
            }
            chai.request(app)
                .post('/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error')
                    done();
                });
        });
    });
    describe('/POST signup', () => {
        it('it should POST a user without lastName field', (done) => {
            let data = {
                firstName: "PK",
                email: "pk12345569@g.com",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
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
    describe('/POST signup', () => {
        it('it should POST a user', (done) => {
            let data = {
                firstName: "PK",
                lastName: "Khandelwal",
                email: "pk12345567@g.com",
                password: "123456789",
                role: "user"
            }
            chai.request(app)
                .post('/signup')
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