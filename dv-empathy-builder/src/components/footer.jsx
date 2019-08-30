import React from "react";
import { FooterStyling } from "./styling/FooterStyling";
const Footer = () => {
  return (
    <FooterStyling>
      <div class="contentIcons">
        <ul class="social">
          <a href=" info@freefrom.org ">
            <img src="https://i.imgur.com/k0y2VV1.png"></img>
          </a>
          <a href=" https://www.facebook.com/freefrom.org/">
            <img src="https://i.imgur.com/Ny6O0uA.png"></img>
          </a>
          <a href="https://twitter.com/freefromorg">
            <img src="https://i.imgur.com/x2CIUvg.png"></img>
          </a>
          <a href="https://www.linkedin.com/company/freefrom">
            <img src="https://i.imgur.com/H17EkSg.png"></img>
          </a>
          <a href="https://www.instagram.com/freefromdotorg/">
            <img src="https://i.imgur.com/xQJhFIE.png"></img>
          </a>
        </ul>
      </div>

      <div class="copyright">© 2019 FreeFrom</div>
      <div class="nonprofit">
        *FreeFrom is a registered 501(c)(3) organization. All donations are tax
        deductible.
      </div>
    </FooterStyling>
  );
};

export default Footer;
