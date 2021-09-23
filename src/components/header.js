import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img
        src="./sky_background.jpg"
        alt=""
        className={headerStyles.background}
      />
      <Link to="/">
        <img
          src="https://i.imgur.com/Bbb1HlB.png"
          alt=""
          className={[headerStyles.imageScroll, headerStyles.imageTop].join(
            " "
          )}
        />
      </Link>

      <p className={headerStyles.links}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          Home
        </Link>{" "}
        |{" "}
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/about"
        >
          About
        </Link>{" "}
        |{" "}
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/blog"
        >
          Blog
        </Link>{" "}
        |{" "}
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/contact"
        >
          Contact
        </Link>
      </p>
    </header>
  )
}

export default Header
