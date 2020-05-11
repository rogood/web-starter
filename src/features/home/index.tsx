import React, { useEffect } from 'react'
import Router from 'next/router'
import LoginPanel from '../../components/LoginPanel'
import Footer from '../../components/Footer'
import { getLoggedInUser } from '../../api/api'
import firebase from '../../firebase'

export default function HomePage(): JSX.Element {
    useEffect(function (): void {
        if (getLoggedInUser()) {
            Router.push('/dashboard')
        }

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                Router.push('/dashboard')
            }
        })
    }, [])

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
