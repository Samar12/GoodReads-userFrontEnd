import React from "react";
import { Pagination } from "react-bootstrap";

const MyPaging = props => (
  <Pagination className="mt-5 mb-5 justify-content-center ">
    <Pagination.Prev />
    <Pagination.Item onClick={() => props.action(1)} active>
      {1}
    </Pagination.Item>
    {props.count.map((e, i) => (
      <Pagination.Item onClick={() => props.action(i + 2)}>{i + 2}</Pagination.Item>
    ))}
    <Pagination.Next />
  </Pagination>
);
export default MyPaging;
