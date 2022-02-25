// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
// import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Form,Label, CustomInput,Input,FormGroup,Button} from "reactstrap";


export default class Deposite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      state: "",
    };
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Agricoin | My wallet</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Withdrow
        </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
          <Breadcrumb />
          <div className="myaccount-area pb-80 pt-100">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="ml-auto mr-auto col-lg-9">
                  <div className="myaccount-wrapper">
                    <Card className="single-my-account mb-20">
                      {/* <Card.Header className="panel-heading">
                      </Card.Header> */}
                      <Card.Body>
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <ul className="">
                                    {/* <li style={{borderLeft:"1px solid #dde5ed"}}> */}
                                    <li className="">
                                      <img  src="//icons.iconarchive.com/icons/flat-icons.com/flat/256/Wallet-icon.png"  
                                            alt=""  
                                            style={{width:"40px"}} />{" "}
                                          <Label>AgriCoin Wallet</Label>
                                      <h3>₹ 0</h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info" style={{float: "right"}}>
                                  <ul className="bal">
                                    <li  style={{borderLeft:"1px solid #dde5ed"}}>
                                      <Label>Total Balance </Label>
                                      <h3> ₹ 0</h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            
                            <div className="col-lg-6 col-md-6">
                                  <Label>Amount</Label>
                                    <div className="billing-info">
                                      <Input 
                                        type="text"  
                                        id="amount" 
                                        name="amount"
                                    placeholder= "₹ Enter Amount"
                                      />
                                    </div>
                                  </div>
                            <div className="col-lg-6 col-md-6">
                              <FormGroup>
                                <Label for="exampleSelect">
                                    Select Amount
                                    </Label>
                                    <CustomInput
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    >
                                    <option>
                                    Enter Amount
                                        
                                    </option>
                                    <option>
                                        INR
                                    </option>
                                    <option>
                                        USD
                                    </option>
                                    <option>
                                        CRYPTO CURRENCY
                                    </option>
                                    
                                    </CustomInput>
                                </FormGroup>
                              </div>
                              <div className="col-lg-6 col-md-6">
                              <Button name="subject" style={{backgroundColor:'#34b56b'}}>Submit</Button>
                            </div>
                          </div>
                          {/* <div className=''style={{marginTop:'20px'}}>
                            <Label></Label>
                           
                          </div> */}
                       
                        
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