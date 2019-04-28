import React from "react";
import { Dropdown } from "react-bootstrap";

const MyDropdown = props => (
  <Dropdown className="size text-center">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Want To Read
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="">Read</Dropdown.Item>
      <Dropdown.Item href="">Currently reading</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
export default MyDropdown;
