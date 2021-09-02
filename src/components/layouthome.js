import React from "react"

import HeaderHome from "./headerhome"
import Footer from "./footer"
import "../styles/index.scss"

import * as layoutStyles from "./layout.module.scss"

const LayoutHome = props => {
  return (
    <div className={layoutStyles.container}>
      <HeaderHome />
      <div className={layoutStyles.card}>
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
      <div className={layoutStyles.footGap}/>
    </div>
  )
}

export default LayoutHome
