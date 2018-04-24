import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Row, Col } from "reactstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Create from "./Create";
import CreateResult from "./CreateResult";
import DisplaySecret from "./DisplaySecret";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Yopass</NavbarBrand>
          </Navbar>
          <div>
            <Container className="margin">
              <Row>
                <Col ml="auto">
                  <Route exact path="/" component={Create} />
                  <Route exact path="/result" component={CreateResult} />
                  <Route
                    exact
                    path="/s/:key/:password"
                    component={DisplaySecret}
                  />
                  <Route exact path="/s/:key" component={DisplaySecret} />
                </Col>
              </Row>
            </Container>
            <Container className="features">
              <hr />
              <p className="lead">
                {" "}
              </p>
              <p />
              <h6>End-to-End encryption</h6>
              <p>
              </p>
              <h6>Self destruction</h6>
              <p>
              </p>
              <h6>No accounts needed</h6>
              <p>
              </p>
              <h6>Open source software</h6>
              <p>
              </p>
            </Container>
          </div>
          <Container className="text-center">
            <div className="text-muted small">
              Created by{" "}
              <a href="https://github.com/jhaals/yopass">Johan Haals</a>
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
