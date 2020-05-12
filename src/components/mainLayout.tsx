import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import colors from '../constants/colors'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props): JSX.Element {
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="main-content">{children}</div>
                <Footer />
            </div>
            <style jsx>{``}</style>
        </div>
    )
}

export default MainLayout
