import React, { useState } from 'react'
import HomePage from '../src/features/home'
import useAuth from '../src/hooks/useAuth'
import Router from 'next/router'
import PageLoader from '../src/components/pageLoader'

const Index = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true)

    useAuth(() => Router.replace('/dashboard'), {
        onNoUser: () => setLoading(false),
        redirectIfNoUser: false,
    })

    if (loading) {
        return <PageLoader />
    }

    return <HomePage />
}

export default Index
