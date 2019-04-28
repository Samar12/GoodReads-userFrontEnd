import React from "react";
import SignUp from "../SignUp/signUp";
import DefaultNavBar from "../Navbar/defaultNav";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  state = {
    mostPopular: [],
    featured: []
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <DefaultNavBar />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pt-5">
          <Col md="7" className="pt-5 caroul">
            {/* <Slider /> */}
          </Col>
          <Col md="4" className="pt-3">
            <SignUp />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
