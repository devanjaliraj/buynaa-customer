import React from "react";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import Swiper from "react-id-swiper";
// import img1 from "../../assets/img/storeimg/1.jpg";
// import img2 from "../../assets/img/storeimg/2.jpeg";
// import img3 from "../../assets/img/storeimg/3.jpeg";
// import img4 from "../../assets/img/storeimg/4.jpg";
// import img5 from "../../assets/img/storeimg/5.jpg";
// import img6 from "../../assets/img/storeimg/6.jpg";
// import img7 from "../../assets/img/storeimg/7.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

import "swiper/css/swiper.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";
class SecondSection extends React.Component {
  state = {
    storeL: [],
  };
  //   componentDidMount() {
  //     axios.get( `http://35.154.86.59/api/admin/getstore/`)
  //     .then(res => {
  //       let storeL = res.data.data;
  //       console.log(res)
  //       this.setState({storeL});

  //     });
  // }
  componentDidMount() {
    //Store Image
    axios
      .get("http://35.154.86.59/api/admin/getstore")
      .then(response => {
        console.log(response.data.data);
        this.setState({ storeL: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var params = {
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    // const storeLData = this.state.storeL.map(data => {
    //   return (
    //     <div>
    //       <Link to={process.env.PUBLIC_URL + "/product-slider/1/" + data.id}>
    //         <img
    //           src={data?.shoplogo_img}
    //           alt="swiper 1"
    //           style={{ width: "18rem", height: "40vh" }}
    //         />
    //       </Link>

    //       {/* <Link to={process.env.PUBLIC_URL + "/product-slider/1/" + data.id}>
    //                 <img
    //                   className="default-img img-fluid"
    //                   src={data?.storeImg[0]}
    //                   alt=""
    //                 />
    //                 {data?.storeImg?.length > 1 ? (
    //                   <img
    //                     className="hover-img img-fluid"
    //                     src={data?.storeImg[4]}
    //                     alt=""
    //                   />
    //                 ) : (
    //                   ""
    //                 )}
    //               </Link>  */}
    //     </div>
    //   );
    // });
    return (
      <Container fluid>
        <Card className="mt-4">
          <Container className="mb-4">
            <Row>
              <Col className="mt-5" style={{ marginLeft: "5rem" }}>
                <h2 className="fw-bolder" style={{ color: "#1877f2" }}>
                  Browse By Trending Store
                </h2>
              </Col>
            </Row>
          </Container>
          <CardBody>
            <div>
              <Swiper {...params} style={{ width: "10px" }}>
                {this.state.storeL?.map(storeList => (
                  <div className="" style={{ width: "18rem" }}>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/product-slider/" +
                        storeList.id
                      }
                    >
                      <img
                        src={storeList.storeImg[0]}
                        alt="swiper 1"
                        style={{ width: "15rem", height: "40vh" }}
                      />
                    </Link>
                  </div>
                ))}
              </Swiper>
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
export default SecondSection;
