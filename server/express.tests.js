const request = require('supertest')
    , {expect} = require('chai')
    , db = require('APP/db')
    , {Product} = db
    , app = require('./start')

/* global describe it before afterEach */

describe('/api/products', () => {
    before('Await database sync', () => db.didSync)
    afterEach('Clear the tables', () => db.truncate({ cascade: true }))

    describe('GET /api/products', () => {
        it('returns an empty array', () =>
        request(app)
          .get(`/api/products`)
          .then(res => {
              expect(res.body).to.be.an.instanceOf(Array)
              expect(res.body).to.have.length(0)
          })
      )

        it('returns a product if there is one', () => {
            var product = Product.build({
                name: 'Test Product',
                img: 'test img',
                description: 'test description',
                quantity: 420,
                price: 100,
                category: 'memes'
            })

            return product.save().then(() => {
                request(app)
                .get(`/api/products`)
                .then(res => {
                    expect(res.body).to.be.an.instanceOf(Array)
                    expect(res.body[0].name).to.equal('Test Product')
                    expect(res.body[0].quantity).to.equal(420)
                })
            })
        }
      )
    })

    // describe('POST', () =>
    // describe('when not logged in', () => {
    //     it('creates a user', () =>
    //     request(app)
    //       .post('/api/users')
    //       .send({
    //           email: 'beth@secrets.org',
    //           password: '12345'
    //       })
    //       .expect(201))

    //     it('redirects to the user it just made', () =>
    //     request(app)
    //       .post('/api/users')
    //       .send({
    //           email: 'eve@interloper.com',
    //           password: '23456',
    //       })
    //       .redirects(1)
    //       .then(res => expect(res.body).to.contain({
    //           email: 'eve@interloper.com'
    //       })))
    // }))
})