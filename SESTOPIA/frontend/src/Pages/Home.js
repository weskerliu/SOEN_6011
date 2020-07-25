import React, { Component } from "react";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import { Container, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Switch>
            <Router>
              <a href="/admin">
                <Button color="success">admin</Button>
              </a>
            </Router>
          </Switch>
        </Row>
        <Row>
          <h1>Home</h1>
        </Row>
      </Container>
    );
  }
}

export default Home;
