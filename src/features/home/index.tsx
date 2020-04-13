import React from 'react'
import MainLayout from '../../components/mainLayout'

import useTranslation from 'next-translate/useTranslation'

export default function HomePage() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <div>{t`home:welcomeText`}</div>
        </MainLayout>
    )
}
