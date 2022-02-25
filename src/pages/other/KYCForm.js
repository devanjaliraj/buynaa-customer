// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
// import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Form, Button,Input, Label,FormGroup } from "reactstrap";
import axios from "axios";

export default class KYCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      state: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://35.154.134.118/api/user/getonecustomer")
      .then((response) => {
        console.log(response);
         this.setState({
          amount: response.data.data.amount
        });
        // this.state
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.response);
      });
    axios
      .get("http://35.154.134.118/api/user/viewoneuseraddress")
      .then((response) => {
        console.log(response);
          this.setState({
          amount: response.data.data.amount,
          state: response.data.data.state,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.response);
      });
    }
  addAddress = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://35.154.134.118/api/user/addcus_address", this.state, )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    };
    submitHandler = (e) => {
      console.log(e);
    };
    changeHandler1 = (e) => {
      this.setState({ status: e.target.value });
    };
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axios
      .post(`http://35.154.134.118/api/user/editcustomer`, this.state, )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Agricoin | KYC FORM</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          KYC FORM
        </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
        <Breadcrumb />
          <div className="myaccount-area pb-100 pt-100" style={{marginTop:"-60px"}}>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="ml-auto mr-auto col-lg-9">
                  <div className="myaccount-wrapper">
                    <Card className="single-my-account mb-20">
                      <Card.Body>
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <ul className="">
                                      <li className="wal">
                                        <h3>KYC Registration Form</h3>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <Label>Name</Label>
                                <div className="billing-info">
                                  <Input 
                                    type="text" 
                                    name="name" 
                                    id="Name" 
                                    placeholder="Enter Your Name"  
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <Label>Phone No.</Label>
                                <div className="billing-info">
                                  <Input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    placeholder="Enter Your Number"  
                                  />
                                </div>
                              </div>
                              <Label>Gender</Label>
                                <div className="col-lg-3 col-md-6">
                                  <FormGroup check className="p-2 m-2">
                                    <Input 
                                      className="mb-0" 
                                      name="radio2" 
                                      type="radio" 
                                    />{" "}
                                    <Label check>Male</Label>
                                  </FormGroup>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <FormGroup check className="p-2 m-2">
                                    <Input 
                                      className="mb-0" 
                                      name="radio2" 
                                      type="radio" 
                                    />{" "}
                                    <Label check>Female</Label>
                                  </FormGroup>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <Label>Nationality</Label>
                                    <div className="billing-info">
                                      <Input 
                                        type="tel" 
                                        name="Nationality" 
                                        id="Nationality" 
                                        placeholder="Nationality "
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                  <Label>Address</Label>
                                    <div className="billing-info">
                                      <Input 
                                        type="textarea" 
                                        name="address" 
                                        id="address" 
                                        placeholder="Enter Your Address"  
                                      />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="upload">
                                  <h3>upload your scanned photo identity card document</h3>
                                  <div className="account-info-wrapper " style={{paddingBottom: '1px'}}></div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <Label>Type Aadhar Card/virtual Number</Label>
                                    <div className="billing-info">
                                      <Input 
                                        type="number" 
                                        name="aadhar" 
                                        id="aadhar" 
                                        placeholder="Aadhar Card Number"  
                                      />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <Label>PAN Card</Label>
                                    <div className="billing-info">
                                      <Input 
                                        type="text" 
                                        name="pan" 
                                        id="pan" 
                                        placeholder="PAN Card"  
                                      />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Label>Upload Doc</Label>
                                      <div className="billing-info">
                                        <Input
                                          id="exampleFile"
                                          name="file"
                                          type="file"
                                        />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <Label>Upload Doc</Label>
                                      <div className="billing-info">
                                        <Input
                                          id="exampleFile"
                                          name="file"
                                          type="file"
                                        />
                                      </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <Button 
                                    name="subject" 
                                    style={{backgroundColor:'#34b56b'}}
                                  >
                                    Submit
                                  </Button>
                                </div>
                              </div>
                              
                            </Form>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LayoutOne>
          </Fragment>
        );
      }
    }