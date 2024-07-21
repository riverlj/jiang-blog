// Step 1: Import React
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="欢迎来到我的个人博客">
      <p>慢下来，享受人生！</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>首页</title>;

// Step 3: Export your component
export default IndexPage;
