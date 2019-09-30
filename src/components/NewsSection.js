import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import NewsTeaser from './NewsTeaser'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

export default () => {
  const params = {
		slidesPerView: 'auto',
		allowTouchMove: true,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		pagination: {
			el: '.articles .swiper-pagination',
    		type: 'bullets',
    		clickable: true,
    		dynamicBullets: true,
		},
  }

  const data = useStaticQuery(graphql`
    query News {
      posts: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "news" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY")
              featuredImage
              externallink
              subtitle
              excerpt
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <Swiper {...params}>
          {data.posts != null && data.posts.edges.map((post, index) => (
            <NewsTeaser data={post} key={index}/>
          ))}   
      </Swiper >
    </Fragment>
  )
}