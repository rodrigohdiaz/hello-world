import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout>
    <div style={{ color: 'purple', margin: `3rem auto`, maxWidth: 600 }}>
      <Header headerText="Rodrigo Diaz" />
      <p>Come on, sit down and hang out for a while.</p>
      <img src="../../images/toronto5.jpg" alt="toronto" style={{ height: "700px", display: "block", margin: "0 auto" }} />
    </div>
    <Footer></Footer>
  </Layout>
  
  )
}



