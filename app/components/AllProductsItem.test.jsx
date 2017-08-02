import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow, mount, render} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import {AllProductsItem} from './AllProductsItem'
import store, {products, categories} from '../store'

/* global describe it beforeEach */
describe(`<AllProductsItem />`, () => {
    let root
    beforeEach('render the root', () =>
        root = render(<AllProductsItem products={products} categories={categories} />, {context: { store: store }})
    )

    it('shows a category selection bar', () => {
        expect(root.find('button')).to.exist
    })

    it('shows a password field', () => {
        const pw = root.find('input[name="password"]')
        expect(pw).to.have.length(1)
        expect(pw.at(0)).to.have.attr('type').equals('password')
    })

    it('has a login button', () => {
        const submit = root.find('button[type="submit"]')
        expect(submit).to.have.length(1)
    })

})
