import React from "react";

const Navagation = () => {
  return (
    <header>
      <div class="navbar">
        {/* <!--logo--> */}
        <div class="img-container">
          <img src="https://i.imgur.com/shod0Zn.jpg" alt="logo"></img>
        </div>

        {/* <!--wrapper for nav--> */}
        <div class="nav">
          {/* <!--checkbox to toggle hamburger icon--> */}
          <input type="checkbox" class="toggle"></input>

          {/* <!--hamburger icon--> */}
          <div class="hamburger-container">
            <div class="hamburger"></div>
          </div>

          <div class="menu">
            <div class="link-container">
              <div class="link">
                <nav>
                  <ul>
                    <li>
                      <a href="#">HOME</a>
                    </li>
                    <li>
                      <a class="current_page" href="#">
                        CALCULATOR
                      </a>
                    </li>
                    <li>
                      <a href="#">OUR WORK</a>
                    </li>
                    <li>
                      <a href="#">TEAM</a>
                    </li>
                    <li>
                      <a href="#">SURVIVOR WEALTH SUMMIT</a>
                    </li>
                    <li>
                      <a href="#">SHOP</a>
                    </li>
                    <li>
                      <a href="#">GET COMPENSATION</a>
                    </li>
                    <li>
                      <a href="#">NEWS</a>
                    </li>
                    <li>
                      <a href="#">CONTACT</a>
                    </li>
                    <li>
                      <a class="donate" href="#">
                        DONATE
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-img">
        <img src="https://i.imgur.com/Nz7E3V9.png"></img>
        <h1 class="header-text">MONTHLY BUDGET AND RELOCATION CALCULATOR</h1>
      </div>
    </header>
  );
};

export default Navagation;
