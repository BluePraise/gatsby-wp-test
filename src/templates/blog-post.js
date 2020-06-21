import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node

  console.log(post)
  return (
    <Layout>
      <div>
        <Link to='/'>
                Back to main page</Link>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
    site {
        siteMetadata {
            title
        }
    }
  }
`