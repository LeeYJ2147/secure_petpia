import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "../common/Grid";
import Column from "../common/Column";
import "./Header.scss";

function Header() {
  return (
    <Grid as="header">
      <Column span={4} as="ul">
        <li className="nav-item">
          <NavLink to="/">PETPIA</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/store">STORE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/latest">LATEST</NavLink>
        </li>
      </Column>
      <Column span={4} as="ul">
        <li className="nav-item">
          <NavLink to="/notice">NOTICE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/qna">Q & A</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search">SEARCH...</NavLink>
        </li>
      </Column>
      <Column span={3} className="contact-info">
        <div>CONTACT: </div>
        <div>HELLO@PETPIA.COM</div>
        <div>
          +82 2-1234-5678<br></br>
        </div>
        <div>INSTAGRAM: </div>
        <div>@PETPIA_OFFICIAL</div>
      </Column>
      <Column span={1} className="menu">
        <div>
          <NavLink to="/login">LOGIN</NavLink>
        </div>
        <div>
          <NavLink to="/cart">CART</NavLink>
        </div>
      </Column>
    </Grid>
  );
}

export default Header;
