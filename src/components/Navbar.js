/*I have no need to make the dropdown and the items inside the navbar seperate components, as they will always be on screen, regardless of route*/

import logo from "../pics/networking.png";
import React from "react";
import { Link } from 'react-router-dom';
import Newdrop from "./Newdrop";
import Smalldrop from "./Smalldrop";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Mynavbar">
        <div className="llogo">
          <Link to="/">
            <img src={logo} className="logo" alt="our logo"
            /> 
          </Link>
        </div>
        <div className="ddropbar">
          <Newdrop />
        </div>

        <div className="hamburger">
          <Smalldrop />
        </div>
      </div>
    );
  }
}