import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div style={{ color: 'purple' }}>
    <Link to="/about/">About </Link>
    <Link to="/contact/"> Contact</Link>
    <Header headerText="Rodrigo Diaz" />
    <p>Come on, sit down and hang out for a while.</p>
    <img src="../../images/toronto5.jpg" alt="toronto" style={{ height: "700px", display: "block", margin: "0 auto" }} />
  </div>
  )
}
