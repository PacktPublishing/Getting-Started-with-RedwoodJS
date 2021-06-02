import { render } from '@redwoodjs/testing'

import HomeLayout from './HomeLayout'

describe('HomeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeLayout />)
    }).not.toThrow()
  })
})
