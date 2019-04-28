import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from "react-bootstrap";
import { MyContext } from "../../App";
import { users } from "./../../data/data";
import { Alert } from "reactstrap";

class Login extends React.Component {
  state = {
    firstName: "",
    password: "",
    admin: false,
    message: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("hiiii user");
  };

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <>
            <Col>
              <Row className="pt-5">
                <Col md="3" />
                <Col md="6" className="pt-3 pr-0">
                  <Row>
                    <Col md="12" className="pt-3 mt-5">
                      <form className="login-form">
                        {this.state.message === "" ? (
                          <h2>Login Here ...</h2>
                        ) : (
                          <h2>
                            <Alert color="danger">{this.state.message}</Alert>
                          </h2>
                        )}
                        <div className="form-group form-group1 ">
                          <input type="text" onChange={this.onChange} name="firstName" className="form-control form-control1 mt-5" placeholder="Name..." />
                        </div>
                        <div className="form-group form-group1  ">
                          <input type="password" onChange={this.onChange} name="password" className="form-control form-control1" placeholder="Password..." />
                        </div>
                        <button type="submit" onClick={this.onSubmit} className=" login__btn ">
                          Login
                        </button>
                      </form>
                    </Col>
                  </Row>
                </Col>
                <Col md="3" />
              </Row>
            </Col>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default withRouter(Login);
