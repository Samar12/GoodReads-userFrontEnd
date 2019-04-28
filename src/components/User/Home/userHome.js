import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from "react-bootstrap";
import { MyContext } from "./../../../App";
import UserNavbar from "./../../Navbar/userNav";
import UserBookList from "../Books/userBookList";
import { myBooks, authors } from "./../../../data/data";
import MyPaging from "../../SharedComponent/Pagination/myPaging";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: myBooks,
      data: myBooks
    };
  }

  handleChange = e => {
    const name = e.target.name;
    console.log(name);
    switch (name) {
      case "all":
        this.setState({ myBooks: this.state.data });
        break;

      case "read":
        const ReadedBooks = this.state.data.filter(e => e.read === true);
        this.setState({ myBooks: ReadedBooks });
        break;
      case "reading":
        const currentlyRead = this.state.data.filter(e => e.currentlyRead === true);
        this.setState({ myBooks: currentlyRead });
        break;
      case "want":
        const wanted = this.state.data.filter(e => e.wantToRead === true);
        this.setState({ myBooks: wanted });
        break;
      default:
        console.log("done");
    }
  };
  findAuthorOfBook = id => {
    const author = authors.filter(a => a.id === id);
    const name = author.name;
    return name;
  };

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <>
            <Row>
              <UserNavbar />
            </Row>
            <Row>
              <Col md="12" className="mt-2">
                <Row className="mt-3 mb-3">
                  <div className="page-Header mt-2 mb-2">My Books</div>
                </Row>
                <Row className="p-4 mt-5 page-content">
                  <Col md="2" className="mr-4 display-links">
                    <Row className="d-block">
                      <button className="p-2 mt-2 links" name="all" onClick={this.handleChange}>
                        All
                      </button>
                      <br />
                      <button className="p-2 mt-2 links" name="read" onClick={this.handleChange}>
                        Read
                      </button>
                      <br />
                      <button className="p-2  mt-2 links" name="reading" onClick={this.handleChange}>
                        Currently Reading
                      </button>
                      <br />
                      <button className="p-2 links mt-2" name="want" onClick={this.handleChange}>
                        Want To Read
                      </button>
                    </Row>
                  </Col>
                  <Col md="9" className=" p-0">
                    {<UserBookList books={this.state.myBooks} />}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <MyPaging />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(UserHome);
