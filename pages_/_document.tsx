import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/images/app-icon/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/images/app-icon/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/images/app-icon/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/images/app-icon/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/images/app-icon/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/images/app-icon/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/images/app-icon/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/images/app-icon/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/app-icon/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/images/app-icon/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/app-icon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/images/app-icon/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/app-icon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="/images/app-icon/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
