import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
    return (
        <Layout>
            <div style={{ color: 'teal' }}>
                <Header headerText='About Me' arbitraryPhrase=" Rodrigo Diaz" />
                <p>Welcome to my humble blog, this is the start of my little playground,
                    this is where I'll be working and testing new technologies and frameworks.
                    I am a full stack developer, I'm trained in architecture and photographer
                    enthusiast.<br/>
                    So have a browse and if you have any question or feedback, just shout! (or send me an email)
                </p>
            </div>
        </Layout>
    )
}