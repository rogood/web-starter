import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props): JSX.Element {
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-content">{children}</div>
                <Footer />
            </div>
            <style jsx>
                {`
                    .main-content {
                        margin-top: 3.6em;
                    }
                `}
            </style>
        </div>
    )
}

export default MainLayout
