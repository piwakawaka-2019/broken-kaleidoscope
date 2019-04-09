import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const wrapper = shallow(<App />)

  const expected = "<Pixel /"
  var onePixel = wrapper.text()
  var split = onePixel.split(">")
  const actual = split.find(function(element) {
    return element == '<Pixel /'
  })

  
  expect(actual).toEqual(expected)
})
