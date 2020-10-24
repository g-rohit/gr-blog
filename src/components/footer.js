import React from "react"
import {Container, Row, Col } from "reactstrap"
const Footer = () => {
  return (
    <footer className="flex-column text-center site-footer d-flex justify-content-center align-items-center">
   <Container>
   <Row className="">
        <Col md="8" className="mx-auto">
          <h1 className="mt-5">Contact Me</h1>
          <p className="lead text-center font-weight-normal p-3">
            I'm open for commissioned work. <br /> You can drop in your queries and
            will get back to you at the earliest.
          </p>
          <p>
                    <i className="fas fa-envelope fa-1x"></i>&nbsp;Send me an email: <a href="mailto:social@grohit.com"
                        className="external__link text-white">social@grohit.com</a>
                </p>
        </Col>
      </Row>
   </Container>
      {/* <div>
       © G Rohit {new Date().getFullYear()}, Built with ❤️ using
        <a href="https://www.gatsbyjs.org" className="text-dark"  target="_blank" rel="noopener noreferrer">Gatsby</a>
       </div> */}

      <div className="sociallinks">
        <a
          href="https://www.instagram.com/uiux.rohit/"
          target="_blank"
          rel="noopener noreferrer"
          name="Instagram link"
          aria-label="Instagram"
        >
          {" "}
          <i className="fab fa-instagram fa-4x"></i>
        </a>
        <a
          href="https://in.linkedin.com/in/g-rohit"
          target="_blank"
          rel="noopener noreferrer"
          name="linkedin link"
          aria-label="linkedin"
        >
          {" "}
          <i className="fab fa-linkedin fa-4x"></i>
        </a>
        <a
          href="https://twitter.com/developerRohit"
          target="_blank"
          rel="noopener noreferrer"
          name="Twitter link"
          aria-label="Twitter"
        >
          {" "}
          <i className="fab fa-twitter-square fa-4x"></i>{" "}
        </a>
        <a
          href="https://github.com/g-rohit"
          target="_blank"
          rel="noopener noreferrer"
          name="github link"
          aria-label="github"
        >
          {" "}
          <i className="fab fa-github fa-4x"></i>{" "}
        </a>
        <a
          href="https://www.freecodecamp.org/grohit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="freecodecamp"
          id="profile-link"
        >
          {" "}
          <i className="fab fa-free-code-camp fa-4x"></i>{" "}
        </a>
        <a
          href="https://codepen.io/grohit/"
          target="_blank"
          name="codepen link"
          rel="noopener noreferrer"
          aria-label="CodePen"
        >
          {" "}
          <i className="fab fa-codepen fa-4x"></i>{" "}
        </a>
        <a
          href="https://t.me/thecodemonger/"
          target="_blank"
          rel="noopener noreferrer"
          name="Telegram link"
          className="ml-2"
          aria-label="Telegram"
        >
          {" "}
          <i className="fab fa-telegram fa-4x"></i>{" "}
        </a>
      </div>
    </footer>
  )
}

export default Footer
