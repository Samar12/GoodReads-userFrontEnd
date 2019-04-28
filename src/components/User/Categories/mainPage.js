import React from "react";
import UserNavbar from "../../Navbar/userNav";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";
import { categories } from "../../../data/data";

export default class MainCategoriesPage extends React.Component {
  render() {
    return (
      <>
        <UserNavbar />
        <MyContext.Consumer>
          {value => (
            <div className="contain">
              {value.MyCategories.map((category, i) => {
                return (
                  <div className="cards-items-item" key={category.id} value={i}>
                    <img className="card-image card-image--rounded " src={category.photo} />
                    <h6 className="card-title">
                      <Link
                        className="myLink"
                        exact
                        to={{
                          pathname: `/categories/${category.id}`
                        }}>
                        {category.name}
                      </Link>
                    </h6>
                  </div>
                );
              })}
            </div>
          )}
        </MyContext.Consumer>
      </>
    );
  }
}
