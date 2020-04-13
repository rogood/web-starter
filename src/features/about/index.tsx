import React from 'react'
import MainLayout from '../../components/mainLayout'

import useTranslation from 'next-translate/useTranslation'

export default function AboutPage() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <div>{t`about:title`}</div>
        </MainLayout>
    )
}
