import React from 'react'

import '../src/styles/scss/_bootstrap.scss'

import '../src/styles/scss/_global.scss'
import '../src/styles/scss/_about.scss'
import '../src/styles/scss/_bootstrap-overrides.scss'
import '../src/styles/scss/_buttons.scss'
import '../src/styles/scss/_cta.scss'
import '../src/styles/scss/_footer.scss'
import '../src/styles/scss/_intro.scss'
import '../src/styles/scss/_navbar.scss'
import '../src/styles/scss/_products.scss'
import '../src/styles/scss/_store.scss'

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
