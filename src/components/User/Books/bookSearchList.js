import React from "react";
import { withRouter } from "react-router-dom";

class BookSearchResult extends React.Component {
  onBooKClick = bookId => e => {
    this.props.history.push(`/book/${bookId}`);
  };

  render() {
    const searchResults = this.props.values;
    console.log(searchResults);

    return (
      <>
        <div className="search" style={{ display: `${this.props.display}` }}>
          <ul className="search-list">
            {searchResults.map(res => (
              <li className="search-item" key={res.id} onClick={this.onBooKClick(res.id)}>
                {res.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(BookSearchResult);
