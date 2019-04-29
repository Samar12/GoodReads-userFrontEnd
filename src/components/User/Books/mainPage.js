import React from "react";
import UserNavbar from "../../Navbar/userNav";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";
import { getBooks } from "./../../../API/Book";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./../Authors/bookCard";

export default class MainCategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
  }
  componentDidMount() {
    getBooks()
      .then(res => {
        this.setState({ allBooks: res });
      })
      .catch(err => {
        this.setState({ error: "server error" });
      });
  }

  render() {
    return (
      <>
        <UserNavbar />
        <MyContext.Consumer>
          {value => (
            <Container className="mt-7 mb-5">
              <Row className="mt-4">
                <Col md="12" sm="12" className="no-gutters justify-content-center mt-4">
                  <Row className="justify-content-center mt-3">
                    {this.state.allBooks.map(b => (
                      <Col md="3" className=" pt-3" key={b._id}>
                        <BookCard book={b} />
                      </Col>
                    ))}
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
