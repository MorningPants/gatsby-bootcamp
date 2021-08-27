import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


import * as headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
          }
        }
      }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title}  to="">
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <p>
                <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}  to="/gatsby-bootcamp/">Home</Link> | <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/gatsby-bootcamp/about">About</Link> | <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/gatsby-bootcamp/blog">Blog</Link> | <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/gatsby-bootcamp/contact">Contact</Link>
         </p>
        </header>

    )
}

export default Header