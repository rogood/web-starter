import React from 'react'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import useTranslation from 'next-translate/useTranslation'

export default function Footer(): JSX.Element {
    const { t } = useTranslation()

    return (
        <div>
            <footer className="footer">
                <Segment inverted vertical style={{ padding: '2em 0em' }}>
                    <Container>
                        <Grid inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <a href="/about">
                                        <Header
                                            inverted
                                            as="h4"
                                            content={t('footer:about')}
                                        />
                                    </a>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <div style={{ textAlign: 'right' }}>
                                        {t('footer:copyright')}
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </footer>
            <style jsx>
                {`
                    .footer {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    )
}
