import React from 'react'

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }): JSX.Element {
    return (
        <div>
            <Component {...pageProps} />
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

                * {
                    padding: 0;
                    margin: 0;
                }

                body {
                    font-family: 'Lato', sans-serif;
                }
            `}</style>
        </div>
    )
}
