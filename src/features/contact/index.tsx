import React from "react"
import MainLayout from "../../components/mainLayout"

import useTranslation from "next-translate/useTranslation"

export default function ContactPage() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <div>{t`contact:title`}</div>
        </MainLayout>
    )
}
