import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {Row, Col} from 'reactstrap';
import Post from '../components/Post';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className="text-center">Welcome to my blog.</h2>
    <p className="text-center font-weight-normal">Documenting my journey of code and design.</p>
   <Row>
   <Col md="8">
   <StaticQuery
      query={indexQuery}
      render={data => {
      return (
      <div>
      {data.allMarkdownRemark.edges.map(( { node }) => (
        <Post title={node.frontmatter.title}
        author={node.frontmatter.author} 
        path={node.frontmatter.path}
        date={node.frontmatter.date}
        body={node.excerpt}
        tags={node.frontmatter.tags}
        fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      </div>
        )
    }}/>
   </Col>  
   <Col md="4">
     
   </Col>  
   </Row>

  </Layout>
)
 

// querying the graph QL :

const indexQuery = graphql`
 query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default IndexPage
