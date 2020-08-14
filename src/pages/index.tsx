import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@components/sections/hero';
import Projects from '@components/sections/projects';
import About from '@components/sections/about';
import Contact from '@components/sections/contact';
import Layout from '@components/layout';

import Footer from '@components/footer';

const IndexPage = ({ data, location }: { data: any; location: any }) => {
  return (
    <Layout location={location}>
      <Hero />
      <Projects projects={data.projects.edges} />
      <About />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            external
            github
            title
            poster {
              childImageSharp {
                fluid(
                  maxWidth: 1920
                  quality: 90
                  traceSVG: { color: "#333c80" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
          }
          id
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            external
            github
            title
            tech
          }
          id
          html
        }
      }
    }
  }
`;
