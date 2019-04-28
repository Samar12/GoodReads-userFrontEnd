import React from "react";
import { Col, Row } from "react-bootstrap";
import MyDropdown from "./../../../SharedComponent/dropDown/dropdown";
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import BookReviewList from "./../bookReviews/bookReviewList";
import BookReviewForm from "./../bookReviews/bookReviewForm";
import Stars from "../../../SharedComponent/Rating/rating";
export default class BookDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1"
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <Col md="10" className="no-gutters">
        <Row className="no-gutters mt-5">
          <Col md="4" sm="11" className="no-gutters">
            <div className="book__img-box">
              <div className="book__img" style={{ backgroundImage: `url(${this.props.bookPhoto})` }} />
              <div className="overlay" />
            </div>
            <MyDropdown />
          </Col>
          <Col md="8" className="book-Info">
            <h1>{this.props.bookName}</h1>

            <h5 className="my-1 book-Author">
              by: <Link to={`/author/${this.props.authorID}`}>{this.props.authorName}</Link>
            </h5>
            <Stars num={this.props.rating} />
            <span className="greyText mx-2">{this.props.ratingdesc}</span>
            {/* <p className="mt-1">{this.props.description}</p> */}
          </Col>
        </Row>

        <Row className="mt-5 ml-1">
          <Col className="description-container p-5">
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}>
                    Description
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === "2" })}
                    onClick={() => {
                      this.toggle("2");
                    }}>
                    Reviews
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <p id="description" className="mt-3">
                        {this.props.description}
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="7">
                      <BookReviewList bookId={this.props.bookId} />
                    </Col>
                    <Col md="5">
                      <BookReviewForm />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
