import React, { Component } from "react";
import Footer from "./footer";
import "./header";
import Header from "./header";

export class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className="Common">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default BaiTapThucHanhLayout;
