import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/mainLayout'
import { getLoggedInUser } from '../../api/api'
import firebase from '../../firebase'

import useTranslation from 'next-translate/useTranslation'

export default function DashboardPage(): JSX.Element {
    const [user, setUser] = useState({ displayName: '' })

    useEffect(function (): void {
        setUser(getLoggedInUser())

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user)
            } else {
                setUser({ displayName: '' })
            }
        })
    }, [])

    return (
        <div>
            <MainLayout>
                <div className="container">
                    <div className="content">
                        {user && user.displayName && (
                            <h1>{`Hi ${user.displayName}!`}</h1>
                        )}
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
