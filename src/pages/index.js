import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div style={{ color: 'purple' }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Rodrigo Diaz" />
    <p>This is a little blog, so come and hang out for a little while</p>
    <img src="../../images/toronto5.jpg" alt="toronto" style={{ height: "700px", display: "block", margin: "0 auto" }} />
  </div>
  )
}
