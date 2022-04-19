import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components';

// import BackgroundSection from '../components/Globals/BackgroundSection';

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>Your Form has been submitted, thank you!</Wrapper>
  </Layout>
);

export const query = graphql`
    {
      img:file(relativePath:{
        eq:"contactus.jpg"
      }){
        childImageSharp{
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `

const Wrapper = styled.p`
text-align:center;
margin:4em 0;
`

export default ContactPage;


