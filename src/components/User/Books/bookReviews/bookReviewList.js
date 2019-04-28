import React from "react";
import { Col } from "react-bootstrap";
import BookReview from "./bookReview";
import { reviews, users, myBooks, authors } from "./../../../../data/data";

export default class BookReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  getReviewOwner(userId) {
    let user = users.filter(u => u.id === userId)[0];
    console.log(user);
    return user;
  }
  getbookAuthor(bookId) {
    let book = myBooks.filter(b => b.id === bookId)[0];
    let author = authors.filter(a => a.id == book.authorId)[0];
    return author.id;
  }
  getReviewDate(bookId) {
    let review = reviews.filter(r => r.bookId === bookId);
    return review;
  }
  render() {
    console.log(this.getReviewDate(this.props.bookId));
    return (
      <Col className="comments-wrap mt-4">
        {this.getReviewDate(this.props.bookId).map(r => {
          return <BookReview review={r} user={this.getReviewOwner(r.userId)} authorId={this.getbookAuthor(this.props.bookId)} />;
        })}
      </Col>
    );
  }
}
