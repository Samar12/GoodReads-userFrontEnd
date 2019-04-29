import React from "react";
import UserNavbar from "../../Navbar/userNav";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";
import {Col,Card} from "react-bootstrap"
import { categories } from "../../../data/data";
import {getAllBooks} from '../../../API/Book'
import axios from 'axios'
import BookCard from '../Authors/bookCard'
import Stars from "../../SharedComponent/Rating/rating";

export default class BookListing extends React.Component {
  constructor(props){
    super(props)
   this.state = {
      data: [],
  }
  }
  async  componentDidMount(){
  const data = await getAllBooks();
  this.setState({data:data});
  console.log(data)
}

  render(){
    return(  
        <>
        <div>

      <UserNavbar />
      
      {/* <div className="contain"> */}
      {this.state.data.map((book) => {
          return (
              // <BookCard key={book._id} name={book.name} photo={book.photo}/>
              <Card>
                <Card.Img variant="top" src={book.photo} />
                <Card.Body>
                  <Card.Title className="book-title">
                    {" "}
                    {/* <Link to={`/book/${book._id}`}> {book.name}</Link> */}
                  </Card.Title>
                  <Card.Text>
                    <Stars num={book.rating} readOnly={true} />
                  </Card.Text>
                </Card.Body>
              </Card>
          )
        })}
      {/* </div> */}
        </div>
      </>
    )
  }
}
