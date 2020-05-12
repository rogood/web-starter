import React from 'react'
import Router from 'next/router'
import colors from '../../constants/colors'
import { signIn } from '../../api/api'
import { Button } from 'semantic-ui-react'

export default function LoginPanel(): JSX.Element {
    async function onGoogleSignInClick(): Promise<void> {
        try {
            await signIn()
            Router.push('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="container">
                <img alt="List It Logo" src="images/logo.png"></img>
                <h1>Welcome to List It!</h1>
                <p>Register or log in to create your lists.</p>
                <Button onClick={onGoogleSignInClick}>
                    Sign in with Google
                </Button>
            </div>
            <style jsx>{`
                .container {
                    background-color: ${colors.white};
                    border-radius: 16px;
                    width: 320px;
                    padding: 32px;
                    text-align: center;
                }
                img {
                    height: 86px;
                    margin-bottom: 32px;
                }
                h1 {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 16px;
                }
                p {
                    font-size: 18px;
                    margin: 8px 0;
                    margin-bottom: 16px;
                }
            `}</style>
        </div>
    )
}
