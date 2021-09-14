import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img
        src="https://www.theskyandthesea.com/static/sky_background-a1b1eded2fe810be4bbd5efc4203f127.jpg"
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
