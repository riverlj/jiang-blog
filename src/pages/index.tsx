// Step 1: Import React
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="欢迎来到我的个人博客">
      <p>慢下来，享受人生！</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpeg"
      />
    </Layout>
  );
};


// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage;
