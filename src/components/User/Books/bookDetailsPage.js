import React from "react";
import { MyContext } from "./../../../App";
import BookDetails from "./bookDetails";

export default class BookDetailsPage extends React.Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {value => <BookDetails book={value.myBooks.filter(b => b.id === this.props.match.params.id)[0]} myAuthors={value.authors} />}
        </MyContext.Consumer>
      </>
    );
  }
}
