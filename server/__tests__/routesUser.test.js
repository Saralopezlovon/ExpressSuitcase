const server = require('../server'); //lanza el servidor
const supertest = require('supertest');
const mongoose = require('../utils/dbmongo');
const request = supertest(server);

afterAll( async () => {
    await server.close()
    await mongoose.connection.close()
})

//BDD Crear un usuario
describe('POST create user', () => {
    it('All fields correct', done => {
        const random = Math.floor(Math.random() * 101);
        const randomEmail = `emailprueba${random}@gmail.com`
        request
            .post('/api/user')
            .send(
                {
                  "email": randomEmail,
                  "password": "12345",
                  "nickname": "Test",
                }
                
              )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err,res)=>{
                if (err) return done(err)
                return done()
            })
    });

    //Formato tipo incorrecto de email->Solo string/número
    it('One or more fields have incorrect type ', done => {
        request
            .post('/api/user')
            .send(
                {
                  "email": 123456484531,
                  "password": 12345,
                  "nickname": "Test",
                }
                
              )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err,res)=>{
                if (err) return done(err)
                return done()
            })
    });

    //Formato incorrecto de email->Sin @
    it('Email have incorrect format, without @', done => {
        request
            .post('/api/user')
            .send(
                {
                  "email": "prueba.email.com",
                  "password": "12345",
                  "nickname": "Test@",
                }
                
              )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err,res)=>{
                if (err) return done(err)
                return done()
            })
    });

    //Aparezca vacío el campo de email
    it('Any Field is void', done => {
        request
            .post('/api/user')
            .send(
                {
                  "email": "prueba.email.com",
                  "password": "1234567",
                  "nickname": "",
                }
                
              )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err,res)=>{
                if (err) return done(err)
                return done()
            })
    });

    //Si el email ya existe
    it('Email already exist in DDBB', done => {
        request
            .post('/api/user')
            .send(
                {
                  "email": "emailprueba@gmail.com",
                  "password": "1234567",
                  "nickname": "test",
                }    
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err,res)=>{
                if (err) return done(err)
                return done()
            })
    });
})



//BDD Login
//BDD Logout
//BDD Ver usuario

