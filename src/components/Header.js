import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import Cta from './Cta'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className={ ["headersection", data.largeheader, (data.greyheader ? "bg-grey" : "")].join(" ") }  ref={el => this.el = el}>
        <div className="slanted-div">
          {(data.backgroundvideo !== null && data.backgroundvideo !== "" && 
            <Fragment>
              <div className="bgimage animated fadeIn bgvideo">
                <video preload="auto" data-setup="{}" webkit-playsinline="" autoPlay src={data.backgroundvideo} controls={false} loop />
              </div>
              <div className="overlay animated slideOutRight"></div>
            </Fragment>
          )}
          {(data.backgroundimage !== null && data.backgroundvideo === null && 
            <Fragment>
              <div className="bgimage animated fadeIn" style={{ backgroundImage: "url(" + data.backgroundimage + ")"}}></div>
              <div className="overlay animated slideOutRight"></div>
            </Fragment>
          )}
          {(data.backgroundimage === null && data.backgroundvideo === null&& 
          <Fragment>
            <div className="bgimage"></div>
          </Fragment>
        )}
        </div>
        <div className="container d-flex h-100">
          <div className="row align-self-center">
            <div className={ [ (data.largeheader === 'header--main' || data.largeheader === 'header--medium' ? "col-lg-8 col-md-8 col-10" : "col-md-7 col-10")].join(" ") }>
              <Marked>
                { data.content }
              </Marked>
            </div>
            {data.cta != null && 
              <div className="col-12 stakeholders">
                <div className="stakeholderlist">
                  {data.cta.map((cta, index) => (
                    <Cta data={cta} key={index}/>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    )
  }
}

Header.propTypes = {
  
}