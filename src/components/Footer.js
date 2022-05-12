import { Container } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="footer_container">
      <Container maxWidth="lg">
        <div className="footer_1">
          <div className="title_sub">
            <h1>Subscribe for Updates</h1>
            <p>
              Quisque turpis lectus, vestibulum vel neque a, rutrum luctus odio.
              Quisque est purus,
              <br /> elementum ut enim eu, sagittis venenatis sem. Pellentesque
              leo enim, <br />
              varius eget felis sed, porttitor posuere dolor.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_email">
              <div className="btn_email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="your email adddress"
                  autoComplete="off"
                />
                <button className="btn_send">SEND</button>
              </div>
              <div className="btn_checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  I have agree to the the terms & conditions
                </label>
              </div>
            </div>
          </form>
        </div>
      </Container>
      <div className="bg_bottom"></div>
      <Container maxWidth="lg">
        <div className="footer_2">
          <div className="footer_netflix">
            <h1>NETFLIX</h1>
            <ul>
              <li>
                <FacebookIcon id="icon_facebook" />
              </li>
              <li>
                <InstagramIcon id="icon_facebook" />
              </li>
              <li>
                <GitHubIcon id="icon_facebook" />
              </li>
              <li>
                <TwitterIcon id="icon_facebook" />
              </li>
            </ul>
          </div>
          <div className="footer_pages">
            <h3>PAGES</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Studio</p>
            <p>Contact Us</p>
          </div>
          <div className="footer_pages">
            <h3>OUR STUDIO</h3>
            <p>Services</p>
            <p>Our Works</p>
            <p>Netflix Team</p>
            <p>History</p>
          </div>
          <div className="footer_pages">
            <h3>NetFlix STUDIO</h3>
            <p>The Noxe Film Studio</p>
            <p>1418 Noxe Street, Suite 3845</p>
            <p>California, USA</p>
          </div>
        </div>
      </Container>
      <p
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        © 2017 Blockbuster. All Rights Reserved. Designed by Giang.
      </p>
    </div>
  );
}

export default Footer;
