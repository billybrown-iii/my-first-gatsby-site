import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';



const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
    <ul>
        {data.allMdx.nodes.map((node) => (
          <article>
            <h2 className="mt-5 text-xl">{node.frontmatter.name}</h2>
            <p>{node.frontmatter.datePublished}</p>
            <div className="border border-slate-800"><MDXRenderer>{node.body}</MDXRenderer></div>
          </article>
        ))}
    </ul>

    </Layout>
  )
}

export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        datePublished(formatString: "MMMM D, YYYY")
        name
      }
      id
      body
    }
  }
}
`


export default BlogPage