import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PartnerTeaser from './PartnerTeaser'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

export default () => {
  const params = {
    slidesPerView: 1,
		allowTouchMove: false,
		speed: 500,
	    autoplay: {
	      delay: 2000,
	      disableOnInteraction: false,
	    },
		effect: 'fade',
		fadeEffect: {
		  crossFade: true
		}
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
      <div class="col-4">
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
      <div class="col-4">
			  <div class="partners">
          <Swiper {...params}>
            {data.partners != null && data.partners.edges.concat(data.partners.edges.splice(0, 2)).map((partner, index) => (
              <div class="swiper-slide">
                <PartnerTeaser data={partner} key={index}/>
              </div>
            ))} 
          </Swiper>
        </div>
      </div>
      <div class="col-4">
			  <div class="partners">
          <Swiper {...params}>
            {data.partners != null && data.partners.edges.concat(data.partners.edges.splice(0, 5)).map((partner, index) => (
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
