import React from "react";
import { NavLink } from "react-router-dom";

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
                      <a href="https://dv-empathy-builder.github.io/landing-page-merge-fix/#">
                        Home
                      </a>
                      {/* <NavLink to="/">HOME</NavLink> */}
                    </li>
                    <li>
                      <NavLink className="current_page" to="/dashboard">
                        CALCULATOR
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">OUR WORK</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">TEAM</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">SURVIVOR WEALTH SUMMIT</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">SHOP</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">GET COMPENSATION</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">NEWS</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">CONTACT</NavLink>
                    </li>

                    <NavLink
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location = "/login";
                      }}
                    >
                      LOGOUT
                    </NavLink>
                    <li>
                      <NavLink className="donate" to="#">
                        DONATE
                      </NavLink>
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
