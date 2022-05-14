import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Intro from "../components/Intro";
import * as styles from "../styles/index.module.css";


export default function Index() {

  const data = useStaticQuery(graphql`
  query SiteInfo {
    contentfulSiteInfo {
      mainHeading
      tagLine
    }
  }
  `);

  return (
    <Layout>
      {/* <Konami />
      <section className={styles.header}>
        <div>
          <h2>{ data.contentfulSiteInfo.mainHeading }</h2>
          <h3>{ data.contentfulSiteInfo.tagLine }</h3>
          <Link className={styles.btn} to="/projects">Portfolio</Link>
        </div>

        <div>
          <img src="banner.png" style={ {maxWidth: '100%'} } alt="site banner"></img>
        </div>
      </section> */}

        <Hero />
        <Intro />
        <Bio />
        <Portfolio />
        <Contact />
    </Layout>
  );
}
