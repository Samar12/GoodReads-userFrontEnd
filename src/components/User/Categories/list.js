import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { authors, myBooks } from "../../../data/data";
import { MyContext } from "../../../App";
import BookCard from "./../Authors/bookCard";
import UserNavbar from "./../../Navbar/userNav";

export default class CategoryBookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getBookDataByCategory = id => {
      let books = myBooks.filter(b => b.categoryId == id);
      return books;
    };
    return (
      <>
        <MyContext.Consumer>
          {value => (
            <Container className="mt-7 mb-5">
              <Row className="mt-4">
                <Col md="11" sm="11" className="no-gutters justify-content-center mt-4">
                  <Row className="justify-content-center mt-3">
                    {getBookDataByCategory(this.props.id).map(b => {
                      return (
                        <Col md="3" className="m-1" key={b.id}>
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
