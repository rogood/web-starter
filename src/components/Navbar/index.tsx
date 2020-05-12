import React, { useEffect, useState, ReactNode } from 'react'
import colors from '../../constants/colors'
import { getLoggedInUser } from '../../api/api'
import firebase from '../../firebase'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

type Props = {
    rightContent?: ReactNode
}

export default function Navbar({ rightContent }: Props): JSX.Element {
    const [user, setUser] = useState({ displayName: '' })

    useEffect(function (): void {
        setUser(getLoggedInUser())

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user)
            } else {
                setUser({ displayName: '' })
            }
        })
    }, [])

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
            <Menu fixed="top" inverted as="nav">
                <Container>
                    <Menu.Item as="a" header href="/">
                        <Image
                            size="tiny"
                            src="images/logo-inverse.png"
                            style={{ marginRight: '1.5em' }}
                        />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Dropdown
                            item
                            simple
                            text={
                                user && user.displayName
                                    ? user.displayName
                                    : 'Log In'
                            }
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className="dropdown icon" />
                                    <span className="text">Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
            <style jsx>{`
                .nav {
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
