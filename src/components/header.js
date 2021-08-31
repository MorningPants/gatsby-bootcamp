import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {

  return (
    <header className={headerStyles.header}>
      <img
        src="https://i.pinimg.com/originals/b1/20/25/b1202568d88e8fe9e02e7a67fa42c93e.jpg"
        alt=""
        className={headerStyles.background}
      />
      <img
        src="https://i.imgur.com/Bbb1HlB.png"
        alt=""
        className={headerStyles.image}
      />
      <div className={headerStyles.card}>
        <h1>
          <Link className={headerStyles.title} to="">
            Andy Hopkins
          </Link>
        </h1>
        <h2>aka MorningPants, Web Developer</h2>

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
      </div>
    </header>
  )
}

export default Header
