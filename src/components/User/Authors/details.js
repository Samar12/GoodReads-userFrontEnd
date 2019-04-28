import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { authors, myBooks } from "../../../data/data";
import { MyContext } from "../../../App";
import BookCard from "./bookCard";
import UserNavbar from "./../../Navbar/userNav";

export default class AuthorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.match.params.id
    };
  }

  render() {
    let getAuthorDataById = id => {
      let author = authors.filter(a => a.id == id)[0];
      return author;
    };
    let getBookDataByAuthor = id => {
      let books = myBooks.filter(b => b.authorId == id);
      return books;
    };
    console.log(getAuthorDataById(this.state.authorId).photo);
    return (
      <>
        <UserNavbar />
        <MyContext.Consumer>
          {value => (
            <Container className="mt-7 mb-5">
              <Row className="no-gutters mt-5">
                <Col md="4" sm="11" className="no-gutters">
                  <div className="book__img-box">
                    <div className="book__img" style={{ backgroundImage: `url(${getAuthorDataById(this.state.authorId).photo})` }} />
                  </div>
                  <h5>150 Rating | 5 reviews | avg rating:4.37</h5>
                </Col>

                <Col md="8" className="book-Info">
                  <h1>{getAuthorDataById(this.state.authorId).name}</h1>
                  <h3>{getAuthorDataById(this.state.authorId).DOB}</h3>
                  <p>{getAuthorDataById(this.state.authorId).description}</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="11" sm="11" className="no-gutters justify-content-center mt-4">
                  <hr className="mt-3 mb-3" />
                  <h1 className="panel-title mt-3">Author Books</h1>
                  <Row className="justify-content-center mt-3">
                    {getBookDataByAuthor(this.state.authorId).map(b => {
                      return (
                        <Col md="3" className="m-1">
                          <BookCard book={b} />
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Container>
          )}
        </MyContext.Consumer>
      </>
    );
  }
}
