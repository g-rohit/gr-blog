import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"
import { CardDeck, Card, CardBody, CardFooter } from "reactstrap"
// importing each card thumbnails from images folder
import prismThumb from '../images/prism-site.jpg';
import acceptMeThumb from '../images/acceptMe-site.jpg';


const Projects = () => (
  <Layout>
    
    <SEO title="Projects" />
    <h1 className="my-3">Here are some of my project works</h1>
    <Row className="d-flex justify-content-center align-items-center pt-6 pb-5 text-center">
      <Col md="12">
        <CardDeck className="m-4">
          <Card>
            <a href="https://prismclubs.com" target="_blank" rel="noopener">
              <img
                  className="img-rounded img-fluid"
                  src={prismThumb}
                  alt="Prism website"
                />
              {/* <Img fluid="" className="card-img-top" /> */}
            </a>
            <CardBody className="text-navyblue">
              <h4 className="card-title">Prism Club &amp; Kitchen</h4>
              <p>
                https://prismclubs.com 
              </p>
              <p className="text-center">
                Designed and developed this website for one of the top night
                clubs in India.
              </p>
            </CardBody>
            <a href="https://prismclubs.com" target="_blank" rel="noopener">
            <CardFooter className="gr-card-footer">
            Visit <i className="far fa-external-link-alt"></i>
            </CardFooter>
                        </a>
          </Card>
          <Card>
            <a href="https://acceptme.in" target="_blank" rel="noopener">
              <img
                  className="img-rounded img-fluid"
                  src={acceptMeThumb}
                  alt="Acceptme website"
                />
              {/* <Img fluid="" className="card-img-top" /> */}
            </a>
            <CardBody className="text-navyblue">
              <h4 className="card-title">Acceptme.in </h4>
              <p>
              https://acceptme.in 
              </p>
              <p className="text-center">
              Designed and developed (Only frontend) this website which can accept
                                your pending Instagram follow requests in just one click.
              </p>
              
            </CardBody>
            <a href="https://acceptme.in" target="_blank" rel="noopener">
            <CardFooter className="gr-card-footer">
            Visit <i className="far fa-external-link-alt"></i>
            </CardFooter>
                        </a>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </Layout>
)

export default Projects
