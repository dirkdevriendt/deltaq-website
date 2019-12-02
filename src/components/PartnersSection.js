import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PartnerTeaser from './PartnerTeaser'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

export default () => {
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
		allowTouchMove: false,
		speed: 500,
	    autoplay: {
	      delay: 4000,
	      disableOnInteraction: false,
	    },
    effect: 'slide',
    loop: true
  }

  const data = useStaticQuery(graphql`
    query Partners {
      partners: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "partner" } } }
        sort: { order: ASC, fields: [frontmatter___sortweight] }
      ) {
        edges {
          node {
            frontmatter {
              title
              featuredImage
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <div class="col-12">
			  <div class="partners">
          <Swiper {...params}>
            {data.partners != null && data.partners.edges.map((partner, index) => (
              <div class="swiper-slide">
                <PartnerTeaser data={partner} key={index}/>
              </div>
            ))} 
          </Swiper>
        </div>
      </div>
    </Fragment>
  )
}
