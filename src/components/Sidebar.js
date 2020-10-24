import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  FormGroup,
  Input,
} from "reactstrap"

import { Icon } from "@iconify/react"
import instagramOutlined from "@iconify/icons-ant-design/instagram-outlined"
const sidebar = () => (
  <div>
    {/* newsletter signup card */}

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase lead font-weight-normal">
          Newsletter
        </CardTitle>
        <p className="small">
          Get weekly newsletter containing latest tech news, tools, tricks, tips
          and much more.
        </p>
        <FormGroup>
          <Input
            type="email"
            id="user-email-address"
            name="user-email-address"
            placeholder="Enter your email ID"
          />
          <button type="submit" className="btn btn-secondary mt-2 w-100">
            Subscribe
          </button>
        </FormGroup>
      </CardBody>
    </Card>

    {/* Social handles */}
    <Card>
      <CardBody>
        <CardTitle>Stay connected</CardTitle>
        <CardText>
          <Icon icon={instagramOutlined} className="large" />
          :&nbsp;
          <a href="https://www.instagram.com/uiux.rohit/" className="text-dark">
            UIUX.ROHIT
          </a>
        </CardText>
      </CardBody>
    </Card>

    {/* recent posts */}

    <Card>
      <CardBody>
        <CardTitle>Recent Posts:</CardTitle>
        <div>
          <StaticQuery
            query={sidebarQuery}
            render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Card key={node.id}>
                      <Link to={node.frontmatter.path}>
                      <CardImg alt="post-image" className="card-img-top" src={node.frontmatter.image.childImageSharp.fluid.src}/>
                       </Link>
                       <CardBody>
                           <CardTitle>
                               <Link to={node.frontmatter.path}>
                                   {node.frontmatter.title}
                               </Link>
                           </CardTitle>
                       </CardBody>
                    </Card>
                  ))}
                </div>
              )
            }}
          />
        </div>
      </CardBody>
    </Card>

    {/* Ads card */}

    <Card>
      <CardBody>
        <CardTitle>Advertisements</CardTitle>
        <CardImg
          src="https://dummyimage.com/320x200"
          alt="ads-dummy-image"
          className="mb-3"
        />
      </CardBody>
    </Card>
  </div>
)

// function to get the recent posts

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default sidebar
