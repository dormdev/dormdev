/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import { Logo } from '../components/Header'

describe('With Enzyme', () => {
  it('App shows logo', () => {
    const logo = shallow(<Logo />)
    const logoImage = '/assets/logo.svg'

    expect(logo.find('img').prop('src')).toEqual(logoImage)
  })
})
