import React from 'react'
import Navbar from './index'
import { render } from '@testing-library/react'

describe('Navbar', () => {
    test('matches screenshot', () => {
        const { container } = render(<Navbar />)
        expect(container).toMatchSnapshot()
    })
})
