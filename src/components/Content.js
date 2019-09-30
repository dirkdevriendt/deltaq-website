import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SimpleHeader from './SimpleHeader'
import News from './News'
import KeyCase from './KeyCase'
import Team from './Team'
import IconsBlock from './IconsBlock'
import StepsBlock from './StepsBlock'
import PanelsBlock from './PanelsBlock'
import ResourcesBlock from './ResourcesBlock'
import HowItWorks from './HowItWorks'
import BasicText from './BasicText'
import TabsBlock from './TabsBlock'
import DemoText from './DemoText'
import ImageText from './ImageText'
import QuoteText from './QuoteText'
import Quote from './Quote'
import Highlight from './Highlight'
import History from './History'
import Partners from './Partners'
import Testimonials from './Testimonials'

import './Content.css'

const getBlockComponent = ({ ...sectionPart }) => {
  switch (sectionPart.type) {
    case 'header':
      return <Header data={sectionPart} key={sectionPart.index} />
      
    case 'simpleHeader':
        return <SimpleHeader data={sectionPart} key={sectionPart.index} />      

    case 'iconsBlock':
      return <IconsBlock data={sectionPart} key={sectionPart.index} />

    case 'stepsBlock':
        return <StepsBlock data={sectionPart} key={sectionPart.index} />

    case 'news':
      return <News data={sectionPart} key={sectionPart.index} />
    
    case 'howItWorks':
      return <HowItWorks data={sectionPart} key={sectionPart.index} />

    case 'case':
      return <KeyCase data={sectionPart} key={sectionPart.index} />
  
    case 'team':
      return <Team data={sectionPart} key={sectionPart.index} />

    case 'basicText':
      return <BasicText data={sectionPart} key={sectionPart.index} />    

    case 'tabsBlock':
      return <TabsBlock data={sectionPart} key={sectionPart.index} />    

    case 'imageText':
      return <ImageText data={sectionPart} key={sectionPart.index} />   

    case 'demoText':
      return <DemoText data={sectionPart} key={sectionPart.index} />       

    case 'quoteText':
      return <QuoteText data={sectionPart} key={sectionPart.index} />      

    case 'quote':
      return <Quote data={sectionPart} key={sectionPart.index} />     

    case 'panelsBlock':
      return <PanelsBlock data={sectionPart} key={sectionPart.index} />     

    case 'resourcesBlock':
      return <ResourcesBlock data={sectionPart} key={sectionPart.index} />     

    case 'highlight':
      return <Highlight data={sectionPart} key={sectionPart.index} />

    case 'history':
      return <History data={sectionPart} key={sectionPart.index} />

    case 'partnersBlock':
      return <Partners data={sectionPart} key={sectionPart.index} />

    case 'testimonialsBlock':
      return <Testimonials data={sectionPart} key={sectionPart.index} />

    default:
      return <div className="no_block_type" />
  }
}

const Content = ({ source, src, className = '' }) => {
  if (Array.isArray(source)) {
    return (
      <Fragment>
          {source.map((sectionPart) => (
            getBlockComponent(sectionPart)
          ))}
      </Fragment>
    )
  }
  else
  {
    return (
      <Fragment>
        Empty
        </Fragment>
    )
  }
}

Content.propTypes = {
  source: PropTypes.array,
  src: PropTypes.string,
  className: PropTypes.string
}

export default Content
