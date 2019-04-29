// import React, { Component } from "react";
// import BookInfo from "./bookInfo/bookInfo";
// import { Container, Row } from "react-bootstrap";
// import UserNavbar from "./../../Navbar/userNav";

// class BookDetails extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("gbfcvhgn" + " " + this.props.myAuthors);
//     const author = this.props.myAuthors.filter(a => a._id === this.props.book.authorID)[0];
//     const authorName = author;
//     return (
//       <>
//         <UserNavbar />

//         <Container>
//           <BookInfo
//             authorID={this.props.book.authorID}
//             bookId={this.props.book.id}
//             rating={this.props.book.rating}
//             bookPhoto={this.props.book.photo}
//             bookName={this.props.book.name}
//             authorName={authorName}
//             description={this.props.book.description}
//             activeTab={1}
//           />
//         </Container>
//       </>
//     );
//   }
// }
// export default BookDetails;
