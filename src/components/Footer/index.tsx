import React from 'react'
import colors from '../../constants/colors'

export default function Footer(): JSX.Element {
    return (
        <div>
            <footer className="footer">
                <ul>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                </ul>
                <p className="m-0 small">Copyright &copy; List It 2020</p>
            </footer>
            <style jsx>{`
                .footer {
                    display: flex;
                    background-color: ${colors.footerGrey};
                    height: 32px;
                    width: calc(100vw - 64px);
                    padding: 16px 32px;
                    align-items: center;
                    justify-content: space-between;
                    color: ${colors.white};
                }
                ul {
                    list-style-type: none;
                }
                a {
                    color: ${colors.white};
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}
