import React from 'react'
import Navbar from './'

export default {
    title: 'Navbar',
}

export const navbar = (): JSX.Element => (
    <Navbar rightContent={<a href="/">Log In</a>} />
)
