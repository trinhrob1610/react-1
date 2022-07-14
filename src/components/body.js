import React, { Component } from "react";
import Banner from "./banner";
import Item from "./item";

export class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    );
  }
}

export default Body;
