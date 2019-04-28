import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import UserNavbar from "../../Navbar/userNav";
import { MyContext } from "../../../App";
import MyPaging from "../../SharedComponent/Pagination/myPaging";
import CategoryBookList from "./list";
const CategoryBooks = props => (
  <>
    <UserNavbar />
    <MyContext.Consumer>
      {value => (
        <Container>
          {value.MyCategories.filter(category => category.id === props.match.params.id).map(c => (
            <a key={c.id} className="navbar-brand text-center category-title ">
              Category <span>{c.name} </span> Books
              <Col>
                <hr />
              </Col>
            </a>
          ))}
          <Row className="text-center m-auto justify-content-around">
            <CategoryBookList id={props.match.params.id} />
          </Row>
          <MyPaging />
        </Container>
      )}
    </MyContext.Consumer>
  </>
);

export default CategoryBooks;
