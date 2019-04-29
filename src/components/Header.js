import React from "react"
import "./Header.css"

function Header(props) {
    return (
        <header className="navbar">
            {props.text}
        </header>
    )
}

export default Header