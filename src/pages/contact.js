import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home </Link>
            <Link to="/contact/"> Contact</Link>
            <Header headerText="Contact" />
            <p>Send me a message at </p><br/>
            <p>rodrigohdiaz@gmail.com</p>
        </div>
    )
}