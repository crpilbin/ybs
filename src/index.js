import Foundation from "foundation-sites";
import "./public/sass/styles.sass";

import React from "react";
import { render } from "react-dom";
import Calculator from "./public/js/components/Calculator";

class Ybs extends React.Component {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

render(<Ybs />, document.getElementById("ybs-app"));
