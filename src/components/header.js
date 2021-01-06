import React from "react"

export default function Header(props) {
    return <h1 style={{ color: 'red' }}>{props.headerText}{props.arbitraryPhrase}</h1>
}