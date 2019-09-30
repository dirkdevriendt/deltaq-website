import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm.js'
import ContactBar from '../components/ContactBar.js'
import CtaBlock from '../components/CtaBlock.js'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  contactform,
  contactbar,
  ctablock,
  sections
}) => (
  <div className="wrapper DefaultPage">
    <Content source={sections} />
    {contactform !== null && contactform.enablecontactform === true ? <ContactForm props={contactform}/> : ""}
    {contactbar !== null && contactbar.enablecontactbar === true ? <ContactBar props={contactbar}/> : ""}
    {ctablock !== null && ctablock === true ? <CtaBlock /> : ""}
  </div>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        contactform
        {
          contacttheme
          title
          enablecontactform
        }
        contactbar
        {
          title
          content
          enablecontactbar
        }
        ctablock
        sections
        {
          largeheader
          greyheader
          content
          content1
          content2
          content3
          content4
          content5
          content6
          type
          backgroundimage
          backgroundvideo
          externallink
          link
          subtitle
          footer
          featuredImage
          title
          description
          theme
          cta
          {
            link
            subtitle
            title
          }
          block {
            title
            content
            icon
            backgroundimage
            subtitle
            externallink
          }
        }
      }
    }
  }
`
