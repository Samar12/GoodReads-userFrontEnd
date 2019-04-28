import React from "react";
import { Link } from "react-router-dom";
import { Table, Dropdown } from "react-bootstrap";
import { authors } from "./../../../data/data";
import Stars from "../../SharedComponent/Rating/rating";

class UserBookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let findAuthorOfBook = id => {
      const author = authors.filter(a => a.id === id);
      const name = author.name;
      return name;
    };
    const userBooks = ({ books }) => {
      if ({ books }) {
        return books.map(book => {
          return (
            <tr key={book.id} className="mt-2 mb-2">
              <td className="mt-3 mb-3 image">
                <img src={book.photo} alt="" className="book-cover" />
              </td>
              <td className="book-title">
                <Link to={`/book/${book.id}`}> {book.name}</Link>
              </td>
              <td className="book-author">
                <Link to={`/author/${book.authorId}`}>{findAuthorOfBook(book.authorId)}</Link>
              </td>
              <td className="book-rate">
                <Stars num={book.rating} />
              </td>
              <td className="book-avgRating">
                <Stars num={book.avgRating} readOnly={true} />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="drobDWON">
                    Want to Read
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Currently Reading</Dropdown.Item>
                    <Dropdown.Item>Read</Dropdown.Item>
                    <Dropdown.Item>Want to Read</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          );
        });
      }
    };
    return (
      <Table className="books user-home" responsive="sm">
        <thead>
          <tr className="mt-5 mb-5">
            <th>Cover</th>
            <th>Name</th>
            <th>Author</th>
            <th>Avg Rate</th>
            <th>Rating</th>
            <th>Shelve</th>
          </tr>
        </thead>
        <tbody>{userBooks(this.props)}</tbody>
      </Table>
    );
  }
}

export default UserBookList;
