import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'


test('Pixels exists', () => {
  const expected = '<Pixels />';
  const wrapper = shallow(<App />)

  const actual = wrapper.text()

  expect(actual).toBe(expected)
})

test('Only one Pixels is Loaded', () => {
  const expected = 1
  const wrapper = shallow(<App />)

  const actual = wrapper.length

  expect(actual).toBe(expected)

})
