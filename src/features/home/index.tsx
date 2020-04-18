import React from 'react'
import LoginPanel from '../../components/LoginPanel'
import Footer from '../../components/Footer'

export default function HomePage(): JSX.Element {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="panel">
                        <LoginPanel />
                    </div>
                </div>
                <Footer />
            </div>
            <style jsx>{`
                .container {
                    background: linear-gradient(
                            rgba(74, 74, 74, 0.6),
                            rgba(74, 74, 74, 0.6)
                        ),
                        url('images/welcome-bg.jpg');
                    background-size: cover;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-content: space-between;
                }
                .content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100vw;
                    height: 100%;
                }
                .panel {
                    margin: 0px auto;
                }
            `}</style>
        </div>
    )
}
