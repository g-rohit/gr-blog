import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useState } from 'react';
// import Layout from "../components/layout"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  //  NavbarText
} from 'reactstrap';



const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>



      <Navbar color="light" className="bg-navyblue" expand="sm" fixed='top'>
      <div className="container">
        <Link className="navbar-brand" to="/">{ siteTitle }</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
              <Link to="/tags/" className="nav-link">Tags</Link>
 
              </NavItem>
              <NavItem>
              <Link to="/team/" className="nav-link">Teams</Link>
              </NavItem>
              <NavItem>
              <Link to="/about/" className="nav-link">About</Link>
              </NavItem>
        </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
        </div>
      </Navbar>
     
    </header>
  );
}

 
 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
