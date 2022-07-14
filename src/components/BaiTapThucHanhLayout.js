import React, { Component } from "react";
import Body from "./body";
import Footer from "./footer";
import "./header";
import Header from "./header";

export class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className="Common">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default BaiTapThucHanhLayout;
