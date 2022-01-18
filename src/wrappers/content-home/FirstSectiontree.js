import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";
import store1 from "../../assets/img/findashop.png";
import store2 from "../../assets/img/checkshopprofile.png";
import store3 from "../../assets/img/visittheshop.png";

export class FirstSectiontree extends Component {
  render() {
    return (
      <div className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="2" style={{ textAlign: "center" }}>
              <img
                src={store1}
                style={{ width: "10rem", height: "20vh" }}
                alt=""
              />
              <h4 className="fw-bold">Find A Shop</h4>
              <h5 style={{ font: "caption" }}>
                loremTempor mollit esse deserunt ea adipisicing mollit veniam
              </h5>
            </Col>
            <Col lg="1" className="d-flex align-items-center">
              <FaArrowRight
                size={20}
                className="p-1"
                style={{
                  background: "#1877f2",
                  color: "white",
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col lg="2" style={{ textAlign: "center" }}>
              <img
                src={store2}
                style={{ width: "10rem", height: "20vh" }}
                alt=""
              />
              <h4 className="fw-bold">Check Shop Profile</h4>
              <h5 style={{ font: "caption" }}>
                loremTempor mollit esse deserunt ea adipisicing mollit veniam
              </h5>
            </Col>
            <Col lg="1" className="d-flex align-items-center">
              <FaArrowRight
                size={20}
                className="p-1"
                style={{
                  background: "#1877f2",
                  color: "white",
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col lg="2" style={{ textAlign: "center" }}>
              <img
                src={store3}
                style={{ width: "10rem", height: "20vh" }}
                alt=""
              />
              <h4 className="fw-bold">Visit the Shop</h4>
              <h5 style={{ font: "caption" }}>
                loremTempor mollit esse deserunt ea adipisicing mollit veniam
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FirstSectiontree;
