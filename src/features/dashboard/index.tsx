import React from 'react'
import MainLayout from '../../components/mainLayout'

import useTranslation from 'next-translate/useTranslation'
import { Container, Segment } from 'semantic-ui-react'
import useAuth from '../../hooks/useAuth'
import PageLoader from '../../components/pageLoader'

export default function DashboardPage(): JSX.Element {
    const user = useAuth()
    const { t } = useTranslation()

    if (!user) {
        return <PageLoader />
    }

    return (
        <div>
            <MainLayout>
                <div className="outer-container">
                    <Container text>
                        <Segment>
                            {t('dashboard:welcome', { name: user.displayName })}
                        </Segment>
                    </Container>
                </div>
            </MainLayout>
            <style jsx>
                {`
                    .outer-container {
                        padding-top: 3em;
                    }
                `}
            </style>
        </div>
    )
}
