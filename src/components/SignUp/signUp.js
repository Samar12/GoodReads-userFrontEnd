import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Alert } from "reactstrap";
import SimpleSchema from "simpl-schema";
import { register } from "./../../API/User";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("start");
    // debugger;
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      nameError: "",
      passwordError: "",
      emailError: "",
      confirmPasswordError: ""
    });
    const validationContext = new SimpleSchema({
      name: {
        type: String,
        min: 3,
        max: 15,
        optional: false
      },
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        min: 10,
        max: 50,
        optional: false
      },
      password: {
        type: String,
        min: 6,
        max: 50,
        optional: false
      },
      confirmPassword: {
        type: String,
        min: 6,
        max: 50,
        optional: false
      }
    }).newContext();

    const name = this.state.name;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    const email = this.state.email;
    validationContext.validate({ name, email, password, confirmPassword });
    if (validationContext.isValid() && password === confirmPassword) {
      register({ name, email, password })
        // debugger;
        .then(res => {
          this.setState({ message: "Well Done, Now you can log in" });
          // this.setState({ name: "", email: "", password: "", confirmPassword: "", message: "" });
        })
        .catch(err => {
          console.log(err.response.data.message);
          if (err.response.data.message.includes("dup key")) {
            this.setState({ emailError: "this email used before" });
          }
          if (err.response.data.message.includes("name: Path")) {
            this.setState({ nameError: "name must consist of only chars" });
          }
        });
    } else if (confirmPassword != password) {
      this.setState({ confirmPasswordError: "confirmPassword and password must be matched " });
    } else {
      this.setState({ message: "All your data is invalid" });
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Row>
          <Col md="10" className="pt-3 mt-4">
            <Form className="d-flex flex-column mt-5" onSubmit={this.handleSubmit}>
              {this.state.message === "" ? (
                <h2>Sign Up Here ...</h2>
              ) : (
                <h2>
                  {this.state.message != "Your data is invalid" ? (
                    <Alert color="danger">{this.state.message}</Alert>
                  ) : (
                    <Alert color="primary">{this.state.message}</Alert>
                  )}
                </h2>
              )}

              <Form.Group>
                <Form.Control type="text" name="name" placeholder="Your Name..." value={this.state.name} onChange={this.handleChange} />
                <span className="error-text">{this.state.nameError}</span>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="email" placeholder="Your Email..." value={this.state.email} onChange={this.handleChange} />
                <span className="error-text">{this.state.emailError}</span>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" name="password" placeholder="Password..." value={this.state.password} onChange={this.handleChange} />
                <span className="error-text">{this.state.passwordError}</span>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <span className="error-text">{this.state.confirmPasswordError}</span>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}
