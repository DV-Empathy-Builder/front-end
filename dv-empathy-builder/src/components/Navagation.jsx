import React from "react";
import { Link } from "react-router-dom";

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
          <div class="menu">
            <div class="link-container">
              <div class="link">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link className="current_page" to="/dashboard">
                        CALCULATOR
                      </Link>
                    </li>
                    <li>
                      <Link to="#">OUR WORK</Link>
                    </li>
                    <li>
                      <Link to="#">TEAM</Link>
                    </li>
                    <li>
                      <Link to="#">SURVIVOR WEALTH SUMMIT</Link>
                    </li>
                    <li>
                      <Link to="#">SHOP</Link>
                    </li>
                    <li>
                      <Link to="#">GET COMPENSATION</Link>
                    </li>
                    <li>
                      <Link to="#">NEWS</Link>
                    </li>
                    <li>
                      <Link to="#">CONTACT</Link>
                    </li>
                    <li>
                      <Link className="donate" to="#">
                        DONATE
                      </Link>
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
