import React from 'react'
import Nav from './nav'
import Footer from './footer'

type Props = {
    children: any
}

function MainLayout({ children }: Props) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
