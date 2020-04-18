import React from 'react'
import colors from '../../constants/colors'

export default function LoginPanel(): JSX.Element {
    return (
        <div>
            <div className="container">
                <img alt="List It Logo" src="images/logo.png"></img>
                <h1>Welcome to List It!</h1>
                <p>Register or log in to create your lists.</p>
                <button>Sign in with Google</button>
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
