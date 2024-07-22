// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="关于我">
      <p>做了很多工作，但没有精通的，力求精通</p>
    </Layout>
  )
}

// Step 3: Export your component

  export const Head = () => <Seo title="About Me" />

export default AboutPage