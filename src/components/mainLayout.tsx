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
            <style jsx>{`
                .container {
                    background-size: cover;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-content: space-between;
                    background-color: ${colors.white};
                }
                .main-content {
                    height: 100vh;
                }
            `}</style>
        </div>
    )
}

export default MainLayout
