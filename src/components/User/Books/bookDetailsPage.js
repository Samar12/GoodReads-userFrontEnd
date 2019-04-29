// import React from "react";
// import { MyContext } from "./../../../App";
// import BookDetails from "./bookDetails";
// import { getBooks } from "./../../../API/Book";
// import { getAuthors } from "./../../../API/Author";

// export default class BookDetailsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allBooks: [],
//       allAuthors: []
//     };
//   }
//   componentDidMount() {
//     getBooks()
//       .then(res => {
//         this.setState({ allBooks: res });
//       })
//       .catch(err => {
//         this.setState({ error: " error" });
//       });
//     getAuthors()
//       .then(res => {
//         this.setState({ allAuthors: res });
//       })
//       .catch(err => {
//         this.setState({ error: " error" });
//       });
//   }

//   render() {
//     return (
//       <>
//         <MyContext.Consumer>
//           {value => <BookDetails book={this.state.allBooks.filter(b => b.id === this.props.match.params.id)[0]} myAuthors={this.state.allAuthors} />}
//         </MyContext.Consumer>
//       </>
//     );
//   }
// }
