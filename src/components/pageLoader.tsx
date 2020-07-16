import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const PageLoader = (): JSX.Element => (
    <Dimmer active inverted>
        <Loader>Loading</Loader>
    </Dimmer>
)

export default PageLoader
