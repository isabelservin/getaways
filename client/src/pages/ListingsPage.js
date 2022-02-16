import React, { Component } from "react";
import { CardList } from "../components/card-list/CardList";
import { SearchBox } from "../components/search-box/SearchBox";

class ListingsPage extends Component {
  //class Component gives us access to state: a js object
  constructor() {
    super();
    //super calls constructor method on Component class

    this.state = {
      listings: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // fetch('http://localhost:3000/api/listings')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ listings: users }));
  }

  render() {
    const { listings, searchField } = this.state;
    const filteredListings = listings.filter((listing) =>
      listing.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="ListingsPage">
        <SearchBox
          placeholder="search listings"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList listings={filteredListings} />
      </div>
    );
  }
}
export default ListingsPage;
