import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import HomePage from './index'

test('renders a message', () => {
    const { container, getByText } = render(<HomePage />)

    // expect(getByText('home:welcomeTextError')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
})
