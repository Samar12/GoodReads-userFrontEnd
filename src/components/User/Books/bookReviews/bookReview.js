import React from "react";
import { Row } from "react-bootstrap";

export default class BookReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row sm="12" className="review mt-4 .d-inline">
        <div>
          <div className="review-owner__img float-sm-left" style={{ backgroundImage: `url(${this.props.user.photo})` }} />
          {/* <img src={ this.props.user.photo } alt="" /> */}
          <div className="review-container ">
            <div className="review-title ml-3">
              review by
              <h3 className="ml-3">{this.props.user.firstName + " " + this.props.user.lastName}</h3>
              <span>{this.props.review.date}</span>
            </div>
            <p className="ml-3">{this.props.review.body}</p>
          </div>
        </div>
      </Row>
    );
  }
}
