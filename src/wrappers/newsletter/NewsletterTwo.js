import React, { Component } from "react";
import { Row, Input, Container, InputGroup, Button } from "reactstrap";

export class NewsletterTwo extends Component {
  render() {
    return (
      <Container style={{ position: "absolute" }}>
        <div
          className="row"
          style={{
            background: "#1877f2",
            marginTop: "-5rem",
            marginLeft: "9rem",
            padding: "10px",
          }}
        >
          <div className="col-sm-5" style={{ padding: "6px" }}>
            <h2 style={{ color: "white" }}>Get Started With Newsletter</h2>
            <p className="p-1 m-1 text-light">
              Get Started With Newsletter Get Started With.
            </p>
          </div>
          <div className="col-sm-2" style={{ padding: "6px" }}></div>
          <div className="col-sm-5" style={{ padding: "10px" }}>
            <InputGroup>
              <Input type="search" id="gsearch" name="gsearch" />
              <Button color="primary" style={{ background: "black" }}>
                SUBSCRIBE
              </Button>
            </InputGroup>
            <p className="p-1 m-1 text-light">
              Get Started With Newsletter Get Started With Newsletter
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default NewsletterTwo;
