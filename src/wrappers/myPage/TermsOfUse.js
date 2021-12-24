import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";

export default class TermsOfUse extends Component {
  render() {
    return (
      <LayoutOne>
        <Container fluid>
          <Row className="mb-5">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Cloth})`,
                height: "70vh",
                width: "100%",
              }}
            >
              <div className="">
                <h1 className="text-light text-center">Terms Of Use</h1>
              </div>
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                <h1 style={{ fontWeight: "500" }}>
                  Welcome To Buynaa Privacy Policy
                </h1>
                <p>
                  Buynaa (“we,” “our,” or “us”) is committed to protecting your
                  privacy. This Privacy Policy explains how your
                  personalinformation is collected, used, and disclosed by
                  Buynaa . This Privacy Policy applies to our website, and its
                  associated subdomains (collectively, our “Service”) alongside
                  our application, Buynaa .<br /> By accessing or using our
                  Service, you signify that you have read, understood, and agree
                  to our collection,storage, use, and disclosure of your
                  personal information as described in this Privacy Policy and
                  our Terms of Service.
                </p>
                <li>
                  To help explain things as clearly as possible in this Privacy
                  Policy, every time any of these terms are referenced, are
                  strictly defined as:
                </li>
              </ListGroup>
            </Row>
            <Row>
              <ListGroup>
                <h1 style={{ fontWeight: "500" }}>Definitions and key terms</h1>
                ●To help explain things as clearly as possible in this Privacy
                Policy, every time any of these terms are referenced, are
                strictly defined as:<br/> ● Customer: refers to the company,
                organization or person that signs up to use the WonderLite
                Service to manage the relationships with your consumers or
                service users <br/>● Device: any internet connected device such as a
                phone, tablet, computer or any other device that can be used to
                visit WonderLite and use the services.<br/> ● IP address: Every
                device connected to the Internet is assigned a number known as
                an Internet protocol (IP) address. These numbers are usually
                assigned in geographic blocks. An IP address can often be used
                to identify the location from which a device is connecting to
                the Internet.<br/> ● Personnel: refers to those individuals who are
                employed by WonderLite or are under contract to perform a
                service on behalf of one of the parties.<br/> ● Personal Data: any
                information that directly, indirectly, or in connection with
                other information — including a personal identification number —
                allows for the identification or identifiability of a natural
                person. <br/>● Service: refers to the service provided by WonderLite
                as described in the relative terms (if available) and on this
                platform.<br/> ● Third-party service: refers to advertisers, contest
                sponsors, promotional and marketing partners, and others who
                provide our content or whose products or services we think may
                interest you. <br/>● Website: site, which can be accessed via this
                URL: <br/>● You: a person or entity that is registered with
                WonderLite to use the Services.
              </ListGroup>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
