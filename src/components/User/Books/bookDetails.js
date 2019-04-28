import React, { Component } from "react";
import BookInfo from "./bookInfo/bookInfo";
import { Container, Row } from "react-bootstrap";
import UserNavbar from "./../../Navbar/userNav";

class BookDetails extends Component {
  render() {
    const author = this.props.myAuthors.filter(a => a.id === this.props.book.authorId)[0];
    const authorName = author.name;
    return (
      <>
        <UserNavbar />

        <Container>
          <BookInfo
            authorID={this.props.book.authorId}
            bookId={this.props.book.id}
            rating={this.props.book.rating}
            bookPhoto={this.props.book.photo}
            bookName={this.props.book.name}
            authorName={authorName}
            description={this.props.book.description}
            activeTab={1}
          />
        </Container>
      </>
    );
  }
}
export default BookDetails;
