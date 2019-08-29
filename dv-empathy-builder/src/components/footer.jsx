import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div class="contentIcons">
        <ul class="social">
          <a href=" info@freefrom.org ">
            <img src="/socialmedia img/emailbutton.PNG"></img>
          </a>
          <a href=" https://www.facebook.com/freefrom.org/">
            <img src="/socialmedia img/facebook.PNG"></img>
          </a>
          <a href="https://twitter.com/freefromorg">
            <img src="/socialmedia img/twitter.PNG"></img>
          </a>
          <a href="https://www.linkedin.com/company/freefrom">
            <img src="/socialmedia img/indeed.PNG"></img>
          </a>
          <a href="https://www.instagram.com/freefromdotorg/">
            <img src="/socialmedia img/instagram.PNG"></img>
          </a>
        </ul>
      </div>

      <div class="copyright">© 2019 FreeFrom</div>
      <div class="nonprofit">
        *FreeFrom is a registered 501(c)(3) organization. All donations are tax
        deductible.
      </div>
    </footer>
  );
};

export default Footer;
