import React from 'react'
import MainLayout from '../../components/mainLayout'

import useTranslation from 'next-translate/useTranslation'

export default function DashboardPage(): JSX.Element {
    return (
        <div>
            <MainLayout>
                <div className="container">
                    <div className="content">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </MainLayout>
            <style jsx>{`
                .content {
                    padding: 32px;
                }
                h1 {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 16px;
                }
            `}</style>
        </div>
    )
}
