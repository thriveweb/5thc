import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import { RouteWithHeader } from '../src/App'

import Home from '../src/views/Home'
import About from '../src/views/About'
import TheProcess from '../src/views/TheProcess'
import Promotions from '../src/views/Promotions'
import ApplyNow from '../src/views/ApplyNow'
import Contact from '../src/views/Contact'
import PromotionsSingle from '../src/views/PromotionsSingle'

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
)
CMS.registerPreviewStyle('/css/bootstrap.min.css')
CMS.registerPreviewStyle('/css/bootstrap-reboot.min.css')
CMS.registerPreviewStyle('/css/bootstrap-grid.min.css')
CMS.registerPreviewStyle('/css/style.css')
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = collection => data[collection]

const socialMediaSettings = getDocument('settings', 'social')
const promotions = getDocuments('promotions')

const RouteWrap = props => (
  <React.Fragment>
    <RouteWithHeader {...props} />
  </React.Fragment>
)

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => {
  const page = entry.toJS().data
  console.log(page.header)
  return (
    <RouteWrap
      intro={page.header}
      contactSection={page.section5}
      showContactSection
    >
      <Home page={page} socialMediaSettings={socialMediaSettings} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('about-page', ({ entry }) => {
  const page = entry.toJS().data
  return (
    <RouteWrap title={page.title} className='header-about'>
      <About page={page} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('the-process-page', ({ entry }) => {
  const page = entry.toJS().data
  return (
    <RouteWrap title={page.title} className='header-about'>
      <TheProcess page={page} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('promotions-page', ({ entry }) => {
  const page = entry.toJS().data
  return (
    <RouteWrap title={page.title} className='header-about'>
      <Promotions page={page} promotions={promotions} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('contact-page', ({ entry }) => {
  const page = entry.toJS().data
  return (
    <RouteWrap title={page.title} className='header-about'>
      <Contact page={page} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('apply-now-page', ({ entry }) => {
  const page = entry.toJS().data
  return (
    <RouteWrap title={page.title} className='header-about'>
      <ApplyNow page={page} />
    </RouteWrap>
  )
})

CMS.registerPreviewTemplate('promotions', ({ entry }) => {
  const promotion = entry.toJS().data
  return (
    <RouteWrap title={promotion.title} className='header-about'>
      <PromotionsSingle promotion={promotion} />
    </RouteWrap>
  )
})

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})
