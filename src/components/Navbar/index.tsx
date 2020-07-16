import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import useAuth from '../../hooks/useAuth'
import useErrorToast from '../../hooks/useErrorToast'
import Router from 'next/router'
import { signOut } from '../../api/auth'

export default function Navbar(): JSX.Element {
    const user = useAuth(null, { redirectIfNoUser: false })
    const { showErrorToast } = useErrorToast()

    async function onSignOutClick(): Promise<void> {
        try {
            await signOut()
            Router.push('/')
        } catch (error) {
            showErrorToast(error)
        }
    }

    return (
        <div>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header href="/">
                        <Image
                            size="tiny"
                            alt="List It Logo"
                            src="/images/logo-inverse.png"
                            style={{ marginRight: '1.5em' }}
                        />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Dropdown
                            item
                            simple
                            text={user ? user.displayName : 'Log In'}
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={onSignOutClick}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
