import React from 'react'
import HomePage from './index'
import { render } from '@testing-library/react'

describe('Home Page', () => {
    test('matches screenshot', () => {
        const { container } = render(<HomePage />)
        expect(container).toMatchSnapshot()
    })
})
