import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Страницы
import Index from "../pages/Index";
import Result from "../pages/Result";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {/* Bootstrap навигация */}
          <Router>
            {/* Ссылки */}
            <Navbar expand="lg" sticky="top" className="menu__navbar m-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="menu__link" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="menu__link" href="/result">
                    Results
                  </Nav.Link>
                  <Nav.Link className="menu__link" href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link className="menu__link" href="/contact-us">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            {/* Компоненты */}
            <Switch>
              <Route path="/" exact component={Index}>
                <Index></Index>
              </Route>
              <Route path="/result" component={Result}>
                <Result />
              </Route>
              <Route path="/about" component={About}>
                <About />
              </Route>
              <Route path="/contact-us" component={ContactUs}>
                <ContactUs />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
