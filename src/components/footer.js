import React from "react"
import { Row, Col } from "reactstrap"
const Footer = () => {
  return (
    <footer className="flex-column text-center site-footer d-flex justify-content-center align-items-center">
      <Row className="">
        <Col md="8" className="mx-auto">
          <h1 class="mt-5">Contact Me</h1>
          <p class="lead text-center font-weight-normal">
            I'm open for commissioned work. <br /> You can drop in your queries and
            will get back to you at the earliest as possible.
          </p>
          <p>
                    <i class="fas fa-envelope fa-1x"></i>&nbsp;Send me an email: <a href="mailto:social@grohit.com"
                        class="external__link text-white">social@grohit.com</a>
                </p>
        </Col>
      </Row>
      {/* <div>
       © G Rohit {new Date().getFullYear()}, Built with ❤️ using
        <a href="https://www.gatsbyjs.org" className="text-dark"  target="_blank" rel="noopener">Gatsby</a>
       </div> */}

      <div className="sociallinks">
        <a
          href="https://www.instagram.com/uiux.rohit/"
          target="_blank"
          rel="noopener"
          name="Instagram link"
          aria-label="Instagram"
        >
          {" "}
          <i class="fab fa-instagram fa-4x"></i>
        </a>
        <a
          href="https://in.linkedin.com/in/g-rohit"
          target="_blank"
          rel="noopener"
          name="linkedin link"
          aria-label="linkedin"
        >
          {" "}
          <i class="fab fa-linkedin fa-4x"></i>
        </a>
        <a
          href="https://twitter.com/developerRohit"
          target="_blank"
          rel="noopener"
          name="Twitter link"
          aria-label="Twitter"
        >
          {" "}
          <i class="fab fa-twitter-square fa-4x"></i>{" "}
        </a>
        <a
          href="https://github.com/g-rohit"
          target="_blank"
          rel="noopener"
          name="github link"
          aria-label="github"
        >
          {" "}
          <i class="fab fa-github fa-4x"></i>{" "}
        </a>
        <a
          href="https://www.freecodecamp.org/grohit"
          target="_blank"
          rel="noopener"
          aria-label="freecodecamp"
          id="profile-link"
        >
          {" "}
          <i class="fab fa-free-code-camp fa-4x"></i>{" "}
        </a>
        <a
          href="https://codepen.io/grohit/"
          target="_blank"
          name="codepen link"
          rel="noopener"
          aria-label="CodePen"
        >
          {" "}
          <i class="fab fa-codepen fa-4x"></i>{" "}
        </a>
        <a
          href="https://t.me/thecodemonger/"
          target="_blank"
          rel="noopener"
          name="Telegram link"
          class="ml-2"
          aria-label="Telegram"
        >
          {" "}
          <i class="fab fa-telegram fa-4x"></i>{" "}
        </a>
      </div>
    </footer>
  )
}

export default Footer
