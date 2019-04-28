import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default class BookReviewForm extends React.Component {
  render() {
    return (
      <form className="review-form p-4">
        <Row>
          <Col sm="12">
            <textarea rows="9" cols="4" placeholder="your review" />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Button className="Review-btn ">Submit Review</Button>
          </Col>
        </Row>
      </form>
    );
  }
}
