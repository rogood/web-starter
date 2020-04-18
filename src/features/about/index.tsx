import React from 'react'
import MainLayout from '../../components/mainLayout'

import useTranslation from 'next-translate/useTranslation'
import colors from '../../constants/colors'

export default function AboutPage(): JSX.Element {
    return (
        <div>
            <MainLayout>
                <div className="container">
                    <div className="info-container">
                        <h1>We are List It!</h1>
                        <p>
                            We make it easy for you to make simple to do lists.
                        </p>
                        <p>
                            This is actually a starter template designed to make
                            it quick and easy to get a basic application up and
                            running.
                        </p>
                    </div>
                </div>
            </MainLayout>
            <style jsx>{`
                .container {
                    display: flex;
                    background: linear-gradient(
                            rgba(74, 74, 74, 0.6),
                            rgba(74, 74, 74, 0.6)
                        ),
                        url('images/about-bg.jpg');
                    background-size: cover;
                    width: 100vw;
                    height: calc(100vh - 128px);
                }
                .info-container {
                    background-color: ${colors.white};
                    border-radius: 16px;
                    padding: 32px;
                    margin: 32px;
                    width: 100vw;
                    height: fit-content;
                }
                h1 {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 16px;
                }
                p {
                    font-size: 18px;
                    margin: 8px 0;
                    margin-bottom: 16px;
                }
            `}</style>
        </div>
    )
}
