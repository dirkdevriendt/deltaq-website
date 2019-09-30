import React, {Fragment} from 'react'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

const params = {
  slidesPerView: 1,
  allowTouchMove: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  pagination: {
    el: '.cases .swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
  },
}

const CaseTeaser = ({
  data,
}) => (
  <Fragment>
    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12 order-lg-1 order-md-2 order-2">
      <div className="caseinfo">
        {data.node.frontmatter.title !== "" &&
          <Fragment>
            <h5>Client</h5>
            <p>{ data.node.frontmatter.title }</p>
          </Fragment>          
        }
        {data.node.frontmatter.building !== "" &&
          <Fragment>
            <h5>Building</h5>
            <p>{data.node.frontmatter.building.split('\n').map((item, key) => {
              return <Fragment key={key}>{item}<br/></Fragment>
            })}</p>
          </Fragment>
        }
        {data.node.frontmatter.floorarea !== "" &&
          <Fragment>
            <h5>Floor area</h5>
            <p>{ data.node.frontmatter.floorarea }</p>
          </Fragment>          
        }
        {data.node.frontmatter.activation !== "" &&
          <Fragment>
            <h5>DeltaQ activation</h5>
            <p>{ data.node.frontmatter.activation }</p>
          </Fragment>          
        }
      </div>
    </div>
    <div className="offset-xl-2 offset-lg-1 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-1 cases">
      <Swiper {...params}>
        {data.node.frontmatter.featuredGallery.map((item, key) => {
          return <img src={item} alt=""/>
        })}
      </Swiper>
    </div>
    {data.node.frontmatter.keyresults !== null  && 
      <Fragment>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12 order-lg-3 order-md-3 order-3">
          <div className="caseresults">
            <h3>Key results</h3>
            <ul className="results">
              {data.node.frontmatter.keyresults.map((item, key) => {
                return <li key={key}><span className={item.icon}></span> <strong>{item.content.split('\n').map((item, key) => {
                  return <Fragment key={key}>{item}<br/></Fragment>
                })}</strong></li>
              })}
            </ul>
          </div>
        </div>
      </Fragment>
    }
  </Fragment>
)

export default CaseTeaser