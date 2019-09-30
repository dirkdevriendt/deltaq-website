import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare';
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { DefaultPageTemplate } from '../templates/DefaultPage'

CMS.registerMediaLibrary(uploadcare);
CMS.init();

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('basicPage', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))