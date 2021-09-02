import React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"

import * as headerStyles from "./header.module.scss"

const HeaderHome = () => {
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <header className={headerStyles.header}>
      <img
        src="https://www.theskyandthesea.com/images/sky_background.jpg"
        alt=""
        className={headerStyles.background}
      />
      <div className={headerStyles.fixedHeight}>
        <Link to="/">
          <img
            src="https://i.imgur.com/Bbb1HlB.png"
            alt=""
            className={
              scroll
                ? headerStyles.imageTop
                : [headerStyles.imageScroll, headerStyles.imageTop].join(" ")
            }
          />
        </Link>
      </div>
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

export default HeaderHome
