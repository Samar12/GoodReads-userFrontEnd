import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { authors, myBooks } from "../../../data/data";
import { MyContext } from "../../../App";
import AuthorCard from "../../SharedComponent/card/authorCard";
import UserNavbar from "./../../Navbar/userNav";

export default class AuthorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.match.params.id
    };
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <Container className="mt-4 mb-4">
            <Row>
              <UserNavbar />
            </Row>
            <Row md="12" className="justify-content-center">
              {authors.map(a => {
                return (
                  <Col md="3" className="m-3">
                    <AuthorCard author={a} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
      </MyContext.Consumer>
    );
  }
}
