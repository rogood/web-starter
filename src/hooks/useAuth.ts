import { useState, useEffect } from 'react'
import Router from 'next/router'
import { User } from 'firebase'
import { auth } from '../firebase'

type Options = {
    onNoUser?: () => void
    redirectIfNoUser?: boolean
}

const useAuth = (
    onUser?: (any) => void,
    { onNoUser = null, redirectIfNoUser = true }: Options = {}
): User => {
    const [user, setUser] = useState<User>(null)

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((newUser) => {
            setUser(newUser)

            if (newUser) {
                if (onUser) {
                    onUser(newUser)
                }
            } else {
                if (onNoUser) {
                    onNoUser()
                }
                if (redirectIfNoUser) {
                    Router.push('/')
                }
            }
        })

        return (): void => unsubscribe()
    }, [])

    return user
}

export default useAuth
