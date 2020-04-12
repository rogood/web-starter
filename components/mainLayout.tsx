import React from "react"
import NavBar from "./navBar"

type Props = {
    children: any
}

function MainLayout({ children }: Props) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default MainLayout
