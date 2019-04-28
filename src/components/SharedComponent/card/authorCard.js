import React from "react";
import { withRouter } from "react-router";
import { MyContext } from "./../../../App";
import { Link } from "react-router-dom";
import { myBooks } from "./../../../data/data";

class AuthorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <>
            <aside className="profile-card">
              <header>
                <Link to={`/author/${this.props.author.id}`}>
                  <a>
                    <img src={this.props.author.photo} />
                  </a>
                </Link>

                <h1>{this.props.author.name}</h1>

                <h2 className="mt-1">Writer</h2>
              </header>
              <div className="profile-bio">
                <p>Click To Show My Profile...</p>
              </div>
            </aside>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}
export default AuthorCard;
