import React from "react";
import { Link } from "react-router-dom";
import { Nav, Col, Navbar, FormControl, Form } from "react-bootstrap";

class UserNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBook: "",
      matchedBooks: [],
      redirect: false,
      show: "none"
    };
  }

  // onSearch = e => {
  //   const value = e.target.value;
  //   console.log(e.target.value);
  //   const name = e.target.name;
  //   this.setState({ [name]: value }, () => {
  //     bookSearch(this.state.searchBook)
  //       .then(res => {
  //         this.setState({ matchedBooks: res });
  //       })
  //       .catch(err => {
  //         this.setState({ error: "book search error" });
  //       });
  //   });
  //   this.toggleSearchList();
  // };

  // toggleSearchList = () => {
  //   this.state.show == "none" ? this.setState({ show: "block" }) : this.setState({ show: "block" });
  // };

  render() {
    return (
      <Col className="m-0 p-0">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/user">
            <span className="Logo-Part">Good</span>
            <span className="Logo-Part-2">Reads</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto links">
              <Link to="/user" className="nav-link">
                Home
              </Link>

              <Link to="/categories" className="nav-link">
                Categories
              </Link>

              <Link to="/books" className="nav-link">
                Books
              </Link>

              <Link to="/authors" className="nav-link">
                Authors
              </Link>
            </Nav>
            <Form inline className="pt-3">
              <FormControl
                type="text"
                name="searchBook"
                value={this.state.searchBook}
                onChange={this.onSearch}
                placeholder="Search..."
                className="mr-sm-2 searchBar"
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    );
  }
}

export default UserNavbar;
