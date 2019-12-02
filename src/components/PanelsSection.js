import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import LocationTeaser from './LocationTeaser'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

export default () => {

  const params = {
		slidesPerView: 'auto',
    allowTouchMove: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		pagination: {
			el: '.swiper-pagination',
    		type: 'bullets',
    		clickable: true,
    		dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 0
      }
    }
  }

  const data = useStaticQuery(graphql`
    query Locations {
      locations: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "location" } } }
        sort: { order: ASC, fields: [frontmatter___sortweight] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              featuredImage
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
       <Swiper {...params}>
      {data.locations != null && data.locations.edges.map((location, index) => (
        <div class="swiper-slide">
          <LocationTeaser data={location} key={index}/>
        </div>
      ))}
      </Swiper>
    </Fragment>
  )
}