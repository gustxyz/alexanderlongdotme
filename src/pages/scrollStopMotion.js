import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Portal from "../components/Portal";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../style/components/scroll-stop-motion.scss";
import StopMotionScroller from "../components/StopMotionScroller";
const ProjectsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const url =
    "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/";
  const imgExtension = ".jpg";

  const url2 =
    "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/";
  const imgExtension2 = ".jpg";

  const url3 =
    "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/06-transparency-head/";
  const imgExtension3 = ".jpg";

  return (
    <Layout title={siteTitle} pageTitle="projects">
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Link to={`/projects`}>Back to Projects</Link>
      <StopMotionScroller url={url} imgExtension={imgExtension} />
      <StopMotionScroller url={url2} imgExtension={imgExtension2} />

      <h6 id="dynamic-styles">
        An Apple style scrolling stop-motion image component.
      </h6>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ProjectsPage location={props.location} data={data} {...props} />
    )}
  />
);
