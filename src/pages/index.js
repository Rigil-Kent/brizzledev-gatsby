import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
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
      <section className={styles.header}>
        <div>
          <h2>{ data.contentfulSiteInfo.mainHeading }</h2>
          <h3>{ data.contentfulSiteInfo.tagLine }</h3>
          <Link className={styles.btn} to="/projects">Portfolio</Link>
        </div>

        <div>
          <img src="banner.png" style={ {maxWidth: '100%'} } alt="site banner"></img>
        </div>
      </section>
    </Layout>
  );
}
