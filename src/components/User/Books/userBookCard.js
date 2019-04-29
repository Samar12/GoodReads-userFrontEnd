import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Stars from "../../SharedComponent/Rating/rating";
import { editStatus } from "../../../API/User";
import { getAuthorById, getAuthors } from "../../../API/Author";
import { getBooks, getBooksById } from "../../../API/Book";

class UserBookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValues: [],
      err: "",
      rate: "0",
      status: "",
      rating: ""
    };
  }
  componentDidMount = () => {
    this.setState({ rating: this.props.book.rating, status: this.props.book.status });
  };

  onStatusClick = e => {
    const status = e.target.innerText;
    console.log(status);
    const bookId = this.props.book.bookId._id;
    console.log(this.props.book.bookId._id);
    editStatus({ bookId, status })
      .then(res => {
        this.setState({ status });
      })
      .catch(err => {
        this.setState({ error: "status error" });
      });
  };

  onStarClick = e => {
    console.log(e.target.value);
  };

  getAuthorName = id => {
    getAuthorById(id)
      .then(res => {
        return res.FirstName;
        // res.data.FirstName;
      })
      .catch(err => console.log("error"));
  };

  render() {
    let dropdownValues = [];
    switch (this.state.status) {
      case "read":
        dropdownValues.push({ status: "want to read" }, { status: "currently reading" });
        break;
      case "want to read":
        dropdownValues.push({ status: "read" }, { status: "currently reading" });
        break;
      case "currently reading":
        dropdownValues.push({ status: "read" }, { status: "want to read" });
        break;
      default:
        console.log("done");
    }
    return (
      <tr className="mt-2 mb-2">
        <td className="mt-3 mb-3 image">
          <img src={this.props.book.bookId.photo} alt="" className="book-cover" />
        </td>
        <td className="book-title">
          <Link to={`/book/${this.props.book.id}`}> {this.props.book.bookId.name}</Link>
        </td>

        <td className="book-rate">
          <Stars num={this.props.book.rating} bookId={this.props.book.bookId} />
        </td>
        <td className="book-avgRating">
          <Stars num={this.props.book.bookId.avgRating} bookId={this.props.book.bookId} />
          {/* readOnly={ true } */}
        </td>
        <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="drobDWON">
              {this.state.status}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownValues.map(v => (
                <Dropdown.Item onClick={this.onStatusClick}>{v.status}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  }
}

export default UserBookCard;
