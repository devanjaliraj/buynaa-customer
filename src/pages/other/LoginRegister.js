// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import  axios from "axios";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      customer_email: "",
      mobile_no: "",
      sortorder:"",
      selectedFile: null,
      status: ""
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
  
    axios.post("http://35.154.86.59/api/user/customersignup", this.state)
      .then((response) => {
        console.log(response);  
        
        this.props.history.push("/");
      })
      .catch((error) => {
       
        console.log(error);
      });
  };
  render() {
  return (
    <Fragment>
      <MetaTags>
        <title>Buynaa | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem> */}
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">

              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                            <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container" >
                          <div className="login-register-form">
                            <form className=" text-center " onSubmit={this.submitHandler} method="post">
                            
                               <input
                                type="text"
                                name="first_name"
                                placeholder="Enter Your Firstname"
                                value={this.state.first_name}
                                onChange={this.changeHandler}
                              />
                                 <input
                                type="text"
                                name="last_name"
                                placeholder="Enter Your Lastname"
                                value={this.state.last_name}
                                onChange={this.changeHandler}
                              />
                                 <input
                                type="email"
                                name="customer_email"
                                placeholder="Enter Your Email"
                                value={this.state.customer_email}
                                onChange={this.changeHandler}
                              />
                              <input
                                type="number"
                                name="mobile_no"
                                placeholder="Enter Your Mobile No."
                                value={this.state.mobile_no}
                                onChange={this.changeHandler}
                              />
                                  <input
                                type="number"
                                name="sortorder"
                                placeholder="Sort Order"
                                value={this.state.sortorder}
                                onChange={this.changeHandler}
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
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

