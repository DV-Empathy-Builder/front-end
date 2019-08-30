import React from "react";
import styled from "styled-components";

export const FooterStyling = styled.footer`
  color: white;
  background: black;
  padding: 20px 0;
  border: 1px double #e0e0e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  .social {
    padding: 30px 0 20px 0;
  }
  .copyright {
    padding: 10px;
    font-size: 18px;
  }
  .nonprofit {
    padding: 10px 0 50px 0;
    font-size: 18px;
    font-style: italic;
  }
`;
