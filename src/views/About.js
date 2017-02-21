import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { Container } from '../components/common'

export default (props) => (
  <Page>
    <PageHeader title={props.title} subTitle='Welcome' />
    <Container>
      <h1>About</h1>
      <p>A sem vel nec sodales mi vivamus senectus sed potenti a parturient nascetur tincidunt nisi pulvinar rhoncus a. Risus imperdiet taciti suspendisse facilisi a per metus cubilia varius a nostra adipiscing amet ultrices quisque ac mi a. Dictumst a ultrices mi a dignissim ad fermentum eget a nam et a blandit scelerisque. Taciti lorem tempor quam vestibulum dis habitasse vestibulum diam vel est ut proin dis auctor. Suscipit scelerisque orci magna interdum vel bibendum duis netus a consectetur dui magnis ac aliquet sem posuere tincidunt vestibulum.</p>
    </Container>
    <Helmet title='About' />
  </Page>
)