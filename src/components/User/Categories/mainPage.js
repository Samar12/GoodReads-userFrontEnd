import React from "react";
import UserNavbar from "../../Navbar/userNav";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";
import {Col} from "react-bootstrap"
import { categories } from "../../../data/data";
import {getAllCategories} from '../../../API/category'
import axios from 'axios'

export default class MainCategoriesPage extends React.Component {
  constructor(props){
    super(props)
   this.state = {
      data: [],
  }
  }
  async  componentDidMount(){
  const data = await getAllCategories();
  this.setState({data:data});
}

  render(){
    return(  
<>
      <UserNavbar />
      <div className="contain">
      {this.state.data.map((category) => {
          return (
            <div className="cards-items-item" key={category._id}>
              <img className="card-image card-image--rounded " src="https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png" />
              <h6 className="card-title">
                <Link
                  className="myLink"
                  exact
                  to={{
                    pathname: `/categories/${category._id}`
                  }}>
                  {category.name}
                </Link>
              </h6>
            </div>
          );
        })}
      </div>
      </>
    )
  }
}
