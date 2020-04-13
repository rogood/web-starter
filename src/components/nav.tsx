import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

export default function Nav() {
    const router = useRouter()

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark py-lg-4"
            id="mainNav"
        >
            <div className="container">
                <a
                    className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
                    href="#"
                >
                    Start Bootstrap
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li
                            className={classnames('nav-item', 'px-lg-4', {
                                active: router.pathname === '/',
                            })}
                        >
                            <Link href="/">
                                <a className="nav-link text-uppercase text-expanded">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={classnames('nav-item', 'px-lg-4', {
                                active: router.pathname === '/about',
                            })}
                        >
                            <Link href="/about">
                                <a
                                    className="nav-link text-uppercase text-expanded"
                                    href="about.html"
                                >
                                    About
                                </a>
                            </Link>
                        </li>
                        <li
                            className={classnames('nav-item', 'px-lg-4', {
                                active: router.pathname === '/products',
                            })}
                        >
                            <Link href="/products">
                                <a className="nav-link text-uppercase text-expanded">
                                    Products
                                </a>
                            </Link>
                        </li>
                        <li
                            className={classnames('nav-item', 'px-lg-4', {
                                active: router.pathname === '/store',
                            })}
                        >
                            <Link href="/store">
                                <a className="nav-link text-uppercase text-expanded">
                                    Store
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
