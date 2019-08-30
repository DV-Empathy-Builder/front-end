import React from "react";
import styled from "styled-components";

export const CalculatorStyle = styled.div`
  display: flex;
  margin: 1.5rem;
`;

export const BudgetFieldStyle = styled.div`
  width: 26.6rem;
`;

export const LabelStyle = styled.div`
  font-size: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const ButtonStyle = styled.button`
  box-sizing: border-box;
  height: 70px;
  width: 419px;
  border: 2px solid #e1f9f6;
  border-radius: 32px;
  background-color: #ffffff;
  font-family: "roboto", sans-serif;
  font-weight: normal;
  word-spacing: 0.2rem;
  letter-spacing: 2px;
  font-size: 2.1rem;
  color: #e1f9f6;
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
  :hover {
    box-sizing: border-box;
    height: 70px;
    width: 419px;
    border: 2px solid #96d3cd;
    border-radius: 32px;
    background-color: #96d3cd;
    font-family: "roboto", sans-serif;
    font-weight: normal;
    word-spacing: 0.2rem;
    letter-spacing: 2px;
    font-size: 2.1rem;
    color: #000000;
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 3%;
  }
`;
