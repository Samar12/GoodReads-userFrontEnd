import React from "react";
import { editRating } from "./../../../API/User";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false,
      starNum: this.props.num
    };
  }

  handleChange = (rate, bookId, e) => {
    // debugger;
    // console.log(bookId);

    switch (rate) {
      case "1":
        editRating({ bookId, rate })
          .then({})
          .catch(err => {
            this.setState({ err: "Rate error" });
          });
        this.setState = {
          s1: true,
          s2: false,
          s3: false,
          s4: false,
          s5: false,
          starNum: "1"
        };
        break;

      case "2":
        editRating({ bookId, rate })
          .then({})
          .catch(err => {
            this.setState({ err: "Rate error" });
          });
        this.setState = {
          s1: false,
          s2: true,
          s3: false,
          s4: false,
          s5: false,
          starNum: "2"
        };

        break;
      case "3":
        editRating({ bookId, rate })
          .then({})
          .catch(err => {
            this.setState({ err: "Rate error" });
          });
        this.setState = {
          s1: false,
          s2: false,
          s3: true,
          s4: false,
          s5: false,
          starNum: "3"
        };

        break;
      case "4":
        editRating({ bookId, rate })
          .then({})
          .catch(err => {
            this.setState({ err: "Rate error" });
          });
        this.setState = {
          s1: false,
          s2: false,
          s3: false,
          s4: true,
          s5: false,
          starNum: "4"
        };

        break;
      case "5":
        editRating({ bookId, rate })
          .then({})
          .catch(err => {
            this.setState({ err: "Rate error" });
          });
        this.setState = {
          s1: false,
          s2: false,
          s3: false,
          s4: false,
          s5: true,
          starNum: "5"
        };

        break;
      default:
        this.setState = {
          s1: false,
          s2: false,
          s3: false,
          s4: false,
          s5: false,
          starNum: rate
        };
    }
    console.log(this.state);
    // console.log(this.getClickedStar());
  };

  render() {
    let getClickedStar = () => {
      if (this.state.s1) {
        this.setState = {
          starNum: "1"
        };
      } else if (this.state.s2) {
        this.setState = {
          starNum: "2"
        };
      } else if (this.state.s3) {
        this.setState = {
          starNum: "3"
        };
      } else if (this.state.s4) {
        this.setState = {};
        return "4";
      } else if (this.state.s5) {
        this.setState = {
          starNum: "5"
        };
      } else {
        this.setState = {
          starNum: this.props.num
        };
      }
      return this.state.starNum;
    };
    console.log(getClickedStar());
    return (
      <span className="stars" data-stars={getClickedStar()}>
        <svg height="25" width="23" className="star" data-rating="1" onClick={e => this.handleChange("1", this.props.bookId._id, e)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="2" onClick={e => this.handleChange("2", this.props.bookId._id, e)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="3" onClick={e => this.handleChange("3", this.props.bookId._id, e)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="4" onClick={e => this.handleChange("4", this.props.bookId._id, e)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="5" onClick={e => this.handleChange("5", this.props.bookId._id, e)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </span>
    );
  }
}
