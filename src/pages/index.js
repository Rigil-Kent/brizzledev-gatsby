import React from "react"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Intro from "../components/Intro"
// import * as styles from "../styles/index.module.css"


export default function Index() {

  return (
    <Layout>
        <div className="container-all">
          <Hero />
          <Intro />
          <Bio />
          <Portfolio />
          <Contact />
        </div>
    </Layout>
  );
}
