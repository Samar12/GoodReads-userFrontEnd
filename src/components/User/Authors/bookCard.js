import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stars from "../../SharedComponent/Rating/rating";

export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.book.photo} />
        <Card.Body>
          <Card.Title className="book-title">
            {" "}
            <Link to={`/book/${this.props.book.id}`}> {this.props.book.name}</Link>
          </Card.Title>
          <Card.Text>
            <Stars num={this.props.book.rating} readOnly={true} />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
