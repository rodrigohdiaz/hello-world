import React from "react"
import { Link } from "gatsby"


export default function Footer ({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1 rem` }}>
                  <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h5 style={{ display: `inline` }}>&copy; Rodrigo Diaz 2021</h5>
        </Link>
      </header>
            {children}
        </div>
    )
}