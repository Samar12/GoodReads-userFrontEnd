import React from "react";
import { Carousel } from "react-bootstrap";

class Slider extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/images/new.jpg")} alt="First slide" />

            <Carousel.Caption>
              <h3>New 2019 Books</h3>
              <p>We Have all new books that looks amazing ! so Hurry up and login </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/images/award.png")} alt="Third slide" />

            <Carousel.Caption>
              <h3>GOODREADS CHOICE AWARDS </h3>
              <p>5,027,741 Votes Cast ! login ...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/images/top.jpg")} alt="Third slide" />

            <Carousel.Caption>
              <h3>Top Rated in 2018</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </>
    );
  }
}

export default Slider;
