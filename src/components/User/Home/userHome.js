import React from "react";
import { withRouter } from "react-router";
import { Row, Col, Table } from "react-bootstrap";
import { MyContext } from "./../../../App";
import { getAllBooks, getCurReadBooks, getReadBooks, getWantToReadBooks } from "./../../../API/User";
import UserNavbar from "./../../Navbar/userNav";
import { getPaginationCount } from "./../../../helpers/helper";
import MyPaging from "../../SharedComponent/Pagination/myPaging";
import UserBookCard from "../Books/userBookCard";
const uuidv1 = require("uuid/v1");

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: [],
      err: "",
      rate: "",
      status: "",
      count: 0,
      valuee: 1
    };

    this.onPaginationUpdate = this.onPaginationUpdate.bind(this);
  }

  componentDidMount = () => {
    // debugger;
    getAllBooks(this.state.value)
      .then(res => {
        this.setState({ myBooks: res.result, count: res.amount });
        console.log(this.state.myBooks);
        console.log(this.state.count);
      })
      .catch(err => {
        this.setState({ err: "error" });
      });
  };

  handleChange = e => {
    const name = e.target.name;
    console.log(name);
    this.setState({ valuee: 1 });
    switch (name) {
      case "all":
        getAllBooks(this.state.valuee)
          .then(res => {
            this.setState({ myBooks: res.result, count: res.amount });
            console.log(this.state.myBooks);
          })
          .catch(err => {
            this.setState({ err: "error" });
          });
        break;

      case "read":
        getReadBooks(this.state.valuee)
          .then(res => {
            this.setState({ myBooks: res.result, count: res.amount });
            console.log(this.state.myBooks);
          })
          .catch(err => {
            this.setState({ err: "error" });
          });
        break;
      case "reading":
        getCurReadBooks(this.state.valuee)
          .then(res => {
            this.setState({ myBooks: res.result, count: res.amount });
            console.log(this.state.myBooks);
          })
          .catch(err => {
            this.setState({ err: "error" });
          });
        break;
      case "want":
        getWantToReadBooks(this.state.valuee)
          .then(res => {
            this.setState({ myBooks: res.result, count: res.amount });
            console.log(this.state.myBooks);
          })
          .catch(err => {
            this.setState({ err: "error" });
          });
        break;
      default:
        console.log("Sucessfully Complete ");
    }
  };
  onPaginationUpdate(amount) {
    this.setState({ valuee: amount });
    console.log(this.state.valuee);
  }

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
                    <Table className="books user-home" responsive="sm">
                      <thead>
                        <tr className="mt-5 mb-5">
                          <th>Cover</th>
                          <th>Name</th>
                          <th>Avg Rate</th>
                          <th>Rating</th>
                          <th>Shelve</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.myBooks.map(book => (
                          <UserBookCard key={book.bookId._id} book={book} />
                        ))}
                      </tbody>
                    </Table>
                    {/* {<UserBookCard books={this.state.myBooks} />} */}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <MyPaging key={uuidv1} count={getPaginationCount(this.state.count)} action={this.onPaginationUpdate} />
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
