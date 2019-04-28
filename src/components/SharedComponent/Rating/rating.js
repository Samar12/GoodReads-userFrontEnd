import React from "react";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false
    };
  }

  handleChange = num => {
    switch (num) {
      case "0":
        this.setState({
          s1: false,
          s2: false,
          s3: false,
          s4: false,
          s5: false
        });
        break;
      case "1":
        this.setState({
          s1: true,
          s2: false,
          s3: false,
          s4: false,
          s5: false
        });
        break;

      case "2":
        this.setState({
          s1: false,
          s2: true,
          s3: false,
          s4: false,
          s5: false
        });
        break;
      case "3":
        this.setState({
          s1: false,
          s2: false,
          s3: true,
          s4: false,
          s5: false
        });
        break;
      case "4":
        this.setState({
          s1: false,
          s2: false,
          s3: false,
          s4: true,
          s5: false
        });
        break;
      case "5":
        this.setState({
          s1: false,
          s2: false,
          s3: false,
          s4: false,
          s5: true
        });
        break;
      default:
        this.setState({
          s1: false,
          s2: false,
          s3: false,
          s4: false,
          s5: false
        });
    }
  };

  getClickedStar = () => {
    if (this.state.s1) {
      return "1";
    } else if (this.state.s2) {
      return "2";
    } else if (this.state.s3) {
      return "3";
    } else if (this.state.s4) {
      return "4";
    } else {
      return "5";
    }
  };
  render() {
    return (
      <span className="stars" data-stars={this.props.num}>
        <svg height="25" width="23" className="star" data-rating="1" onSubmit={e => this.handleChange("1")} onSubmit={console.log(this.state)}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="2" onSubmit={e => this.handleChange("2")}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="3" onSubmit={e => this.handleChange("3")}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="4" onSubmit={e => this.handleChange("4")}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg height="25" width="23" className="star" data-rating="5" onSubmit={e => this.handleChange("5")}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </span>
    );
  }
}
