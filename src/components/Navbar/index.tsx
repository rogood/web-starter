import React, { ReactNode } from 'react'
import colors from '../../constants/colors'

type Props = {
    rightContent?: ReactNode
}

export default function Navbar({ rightContent }: Props): JSX.Element {
    return (
        <div>
            <nav>
                <div className="logo-content">
                    <a href="/">
                        <img
                            alt="List It Logo"
                            src="images/logo-inverse.png"
                        ></img>
                    </a>
                </div>
                <div className="right-content">{rightContent}</div>
            </nav>
            <style jsx>{`
                nav {
                    display: flex;
                    background-color: ${colors.primary};
                    height: 32px;
                    width: calc(100vw - 32px);
                    padding: 16px;
                    align-items: center;
                    justify-content: space-between;
                    color: ${colors.white};
                }
                .logo-content {
                }
                .logo-content img {
                    height: 32px;
                }
                .right-content a {
                    color: ${colors.white};
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}
