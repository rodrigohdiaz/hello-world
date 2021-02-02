import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Contact() {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <Header headerText="Contact" />
                <p>Send me a message at </p><br/>
                <a href="mailto:rodrigohdiaz@gmail.com">rodrigohdiaz@gmail.com</a>
            </div>
            <Footer></Footer>
        </Layout>
    )
}