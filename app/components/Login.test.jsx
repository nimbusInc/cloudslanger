import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow, mount, render} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import {Login} from './Login'

/* global describe it beforeEach */
describe('<Login />', () => {
    let root
    beforeEach('render the root', () =>
        root = shallow(<Login/>)
    )

    it('shows a login form', () => {
        expect(root.find('input[name="email"]')).to.have.length(1)
        expect(root.find('input[name="password"]')).to.have.length(1)
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

    describe('when submitted', () => {
        const login = spy()
        const root = shallow(<Login login={login}/>)
        const evt = {
            preventDefault: spy(),
            target: {
                email: {value: 'bones@example.com'},
                password: {value: '12345'},
            }
        }

        beforeEach('submit', () => {
            login.reset()
            evt.preventDefault.reset()
            root.find('button[type="submit"]').simulate('submit', evt)
        })

        it('calls props.login with credentials', (evt) => {
            expect(login).to.have.been.calledWith(
                target.email.value,
                target.password.value,
            )
        })

        it('calls preventDefault', () => {
            expect(evt.preventDefault).to.have.been.called
        })
    })
})
