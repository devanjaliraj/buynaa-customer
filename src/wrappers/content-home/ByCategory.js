import React from "react";
import axios from "axios";
// import Carousel from "react-elastic-carousel";
import { Container, Col, Row, Button, Jumbotron } from "reactstrap";
import "../../assets/css/productcard.css";
// import men from "../../assets/img/team/men.jpg";
// import women from "../../assets/img/women.jpg"
// import kid from "../../assets/img/kid.jpg"
import { Link } from "react-router-dom";

class ByCategory extends React.Component {
  state = {
    ByCategoryList: [],
  };
  componentDidMount() {
    axios.get(`http://35.154.86.59/api/admin/getproductCategory/`).then(res => {
      console.log(res);
      this.setState({ ByCategoryList: res.data.data });
    });
  }
  // const [users, setUsers] = useState([]);
  // const getUsers = async()=>{
  // const res= await axios.get(`http://35.154.86.59/api/admin/productbycategory/618a05e27e718858ba3de153`).then((data)=>{
  //   console.log(data)
  //   console.log(data.data.data)
  //   setUsers(data.data.data)

  // }).catch((error)=>{
  //   console.log(error)
  // });
  // console.log(res);
  //setUsers(await res.json());
  // console.log(data);
  // }
  // useEffect(() => {
  //    getUsers();
  // },[]);

  render() {
    const ByCategoryListData = this.state.ByCategoryList?.map(data => {
      return (
        <div>
          <Col lg="4">
            <Link to={`/shop-list-standard/${data.data?._id}`}>
              <img
                src={data?.product_img}
                alt="img"
                height="320vh"
                width="250px"
              />
            </Link>
          </Col>{" "}
          <Col lg="4"></Col>
        </div>
      );
    });

    return (
      <Container className="main mb-5">
        <Jumbotron className="mb-5  ">
          <Row className="m-5">
            <Col>
              <h1
                sm="6"
                className="fw-bolder text-primary"
                style={{ color: "#1877f2" }}
              >
                Browse By Category
              </h1>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                color="primary"
                className=""
                onClick={event =>
                  (window.location.href = "/shop-grid-two-column")
                }
              >
                Explore
              </Button>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron className="d-flex align-items-center justify-content-center">
          {ByCategoryListData}

          {/* <div>

          <Col lg="4">
            <Link to={`${process.env.PUBLIC_URL}/shop-list-standard/${product.id}`}>
            <img
              src={men}
              alt="img"
              height="320vh"
              width="300px"

            />
            </Link>
          </Col>
          </div> */}

          {/*
          <Col lg="4">
          <Link to="/shop-list-standard">

            <img
              src={men}
              alt="img"
              height="320vh"
              width="300px"
            />
            </Link>
          </Col> <Col lg="4">
          <Link to="/shop-list-standard">

            <img
              src={women}
              alt="img"
              height="320vh"
              width="300px"
            />
            </Link>
          </Col>
          <Col lg="4">
          <Link to="/shop-list-standard">

            <img
              src={kid}
              alt="img"
              height="320vh"
              width="300px"
            />
            </Link>
          </Col> */}
        </Jumbotron>
      </Container>
    );
  }
}
export default ByCategory;
