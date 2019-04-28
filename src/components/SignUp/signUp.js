import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Alert } from "reactstrap";
import SimpleSchema from "simpl-schema";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();

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
    this.setState({ name: "", email: "", password: "", confirmPassword: "", message: "" });
    const name = this.state.name;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    const email = this.state.email;
    validationContext.validate({ name, email, password, confirmPassword });
    if (validationContext.isValid() && password === confirmPassword) {
      this.setState({ message: "Well Done, Now you can log in" });
      console.log(validationContext);
      console.log("Submit done sucessfully ");
    } else {
      console.log(validationContext.isValid());
      console.log(this.state);
      this.setState({ message: "Your data is invalid" });
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
                  {this.state.message === "Your data is invalid" ? (
                    <Alert color="danger">{this.state.message}</Alert>
                  ) : (
                    <Alert color="primary">{this.state.message}</Alert>
                  )}
                </h2>
              )}

              <Form.Group>
                <Form.Control type="text" name="name" placeholder="Your Name..." value={this.state.name} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="email" placeholder="Your Email..." value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" name="password" placeholder="Password..." value={this.state.password} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
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
