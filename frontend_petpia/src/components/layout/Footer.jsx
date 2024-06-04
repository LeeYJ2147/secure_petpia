import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "../common/Grid";
import Column from "../common/Column";
import "./Footer.scss";

function Footer() {
  return (
    <Grid as="footer">
      <Column span={4} as="ul" className="footer-nav">
        <li className="footer-nav-item">
          <NavLink to="/">PETPIA</NavLink>
        </li>
        <li className="footer-nav-item">
          <NavLink to="/store">STORE</NavLink>
        </li>
        <li className="footer-nav-item">
          <NavLink to="/latest">LATEST</NavLink>
        </li>
        <li className="footer-nav-item">
          <NavLink to="/notice">NOTICE</NavLink>
        </li>
        <li className="footer-nav-item">
          <NavLink to="/qna">Q & A</NavLink>
        </li>
      </Column>
      <Column span={4} as="ul" className="footer-contact">
        <div>CONTACT US </div>
        <div>HELLO@PETPIA.COM</div>
        <div>+82 2-1234-5678</div>
        <p>[Address Line 1]</p>
        <p>[Address Line 2]</p>
        <p>[City, ZIP Code]</p>
        <p>[Country]</p>
      </Column>
      <Column span={4} className="footer-follow">
        <p>FOLLOW US</p>
        <p>Instagram: @PETPIA_OFFICIAL</p>
        <p>Facebook: [Facebook Link]</p>
        <p>Twitter: [Twitter Link]</p>
        <p>YouTube: [YouTube Link]</p>
      </Column>
    </Grid>
  );
}

export default Footer;
