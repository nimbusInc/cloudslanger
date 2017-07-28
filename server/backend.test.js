'use strict'

const db = require('./app/db')
, { User, Product, Review, Order } = db
, {expect, describe, before, beforeEach, afterEach, it} = require('chai')

describe('The User Model', () => {
    before(function() {
        return db.sync({force: true})
    })

    var user
    beforeEach(function() {
        user = User.build({
            name: 'Barack Obama',
            email: 'some@example.com'
        })

        afterEach(function() {
            return Promise.all([
                User.truncate({ cascade: true })
            ])
        })
    })

    describe('attributes definition', function() {
        it('includes name and email fields', function() {
            return user.save()
            .then(function(savedUser) {
                expect(savedUser.name).to.equal('Barack Obama')
                expect(savedUser.email).to.equal('some@example.com')
            })
        })

        it('requires name', function() {
            user.name = null

            return user.validate()
            .then(function(result) {
                expect(result).to.be.an.instanceOf(Error)
                expect(result.message).to.contain('Validation error')
            })
        })

        it('requires email', function() {
            user.email = null

            return user.validate()
            .then(function(result) {
                expect(result).to.be.an.instanceOf(Error)
                expect(result.message).to.contain('Validation error')
            })
        })
    })
})
