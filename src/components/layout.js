/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer
          style={{
            textAlign: "center",
            marginTop: `2rem`,
            fontFamily: "Epilogue, sans-serif",
          }}
        >
          Made with{" "}
          <span role="img" aria-label="heart" aria-labelledby="heart">
            ❤️
          </span>{" "}
          by Joseph & Mikhaila (with a lot of help from Tom)
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
