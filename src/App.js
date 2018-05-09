import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import Spinner from './components/Spinner'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './views/About'
import ApplyNow from './views/ApplyNow'
import Contact from './views/Contact'
import Home from './views/Home'
import Promotions from './views/Promotions'
import PromotionsSingle from './views/PromotionsSingle'
import TheProcess from './views/TheProcess'
import NoMatch from './views/NoMatch'

import data from './data.json'
import { documentHasTerm, getCollectionTerms } from './util/collection'

export const RouteWithHeader = ({
  children,
  title,
  intro,
  className,
  showContactSection,
  contactSection
}) => (
  <React.Fragment>
    <Header title={title} className={className} intro={intro} />
    {children}
    <Footer
      showContactSection={showContactSection}
      contactSection={contactSection}
    />
  </React.Fragment>
)

class App extends Component {
  state = {
    data,
    loading: false
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings
    const socialMediaSettings = this.getDocument('settings', 'social')
    const homepage = this.getDocument('pages', 'home')
    const promotions = this.getDocuments('promotions')

    const RouteWrap = props => (
      <RouteWithHeader contactSection={homepage.section5} {...props} />
    )

    return (
      <Router>
        <div className='React-Wrap wrapper'>
          {this.state.loading && <Spinner />}
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />

          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
            headerScripts={headerScripts}
          />

          <Switch>
            <Route
              path='/'
              exact
              render={props => {
                return (
                  <RouteWrap intro={homepage.header} showContactSection>
                    <Home
                      page={homepage}
                      socialMediaSettings={socialMediaSettings}
                      promotions={promotions}
                      {...props}
                    />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/about/'
              exact
              render={props => {
                const page = this.getDocument('pages', 'about')
                return (
                  <RouteWrap title={page.title} className='header-about'>
                    <About
                      page={page}
                      socialMediaSettings={socialMediaSettings}
                      {...props}
                    />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/apply-now/'
              exact
              render={props => {
                const page = this.getDocument('pages', 'apply-now')
                return (
                  <RouteWrap title={page.title} className='header-about'>
                    <ApplyNow page={page} {...props} />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/contact/'
              exact
              render={props => {
                const page = this.getDocument('pages', 'contact')
                return (
                  <RouteWrap title={page.title} className='header-about'>
                    <Contact page={page} {...props} />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/promotions/'
              exact
              render={props => {
                const page = this.getDocument('pages', 'promotions')
                return (
                  <RouteWrap
                    title={page.title}
                    className='header-about'
                    showContactSection
                  >
                    <Promotions
                      page={page}
                      promotions={promotions}
                      {...props}
                    />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/promotions/:slug'
              exact
              render={props => {
                const slug = _kebabCase(props.match.params.slug)
                const promotion = promotions.find(
                  promotion => _kebabCase(promotion.title) === slug
                )
                return (
                  <RouteWrap
                    title={promotion.title}
                    className='header-about'
                    showContactSection
                  >
                    <PromotionsSingle
                      promotion={promotion}
                      promotions={promotions}
                      {...props}
                    />
                  </RouteWrap>
                )
              }}
            />
            <Route
              path='/the-process/'
              exact
              render={props => {
                const page = this.getDocument('pages', 'the-process')
                return (
                  <RouteWrap
                    title={page.title}
                    className='header-about'
                    showContactSection
                  >
                    <TheProcess page={page} {...props} />
                  </RouteWrap>
                )
              }}
            />
            <Route
              render={props => (
                <RouteWrap title='404 – Page Not Found' showContactSection>
                  <NoMatch siteUrl={siteUrl} />
                </RouteWrap>
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
