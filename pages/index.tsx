import React from "react"
import HomePage from "./home"

const Index = () => {
    return <HomePage />
}

Index.getInitialProps = async () => ({
    namespacesRequired: [],
})

export default Index
