import React, { useState } from "react";
import "./baloon.css";
import styled from "styled-components";

const Baloon = () => {
  const [input, setInput] = useState(0);
  const [cir1, setCir1] = useState("block");
  const [cir2, setCir2] = useState("block");
  const [cir3, setCir3] = useState("block");
  const [cir4, setCir4] = useState("block");
  const [cir5, setCir5] = useState("block");

  const Circlediv1 = styled.div`
    background-color: #d5e8d4;
    border: 2px solid #c1d4bb;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: ${cir1};
  `;
  const Circlediv2 = styled.div`
    background-color: #ffe6cd;
    border: 2px solid #c9b378;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: ${cir2};
  `;
  const Circlediv3 = styled.div`
    background-color: #6a00ff;
    border: 2px solid #804dc6;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: ${cir3};
  `;
  const Circlediv4 = styled.div`
    background-color: #d9e8fb;
    border: 2px solid #b0bdcd;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: ${cir4};
  `;
  const Circlediv5 = styled.div`
    background-color: #e2d5e7;
    border: 2px solid #c9bccd;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: ${cir5};
  `;

  const inputHandler = () => {
    switch (input) {
      case 1:
        setCir1("none");

        break;
      case 2:
        setCir2("none");

        break;
      case 3:
        setCir3("none");

        break;
      case 4:
        setCir4("none");

        break;
      case 5:
        setCir5("none");

        break;
    }
  };

  return (
    <div>
      <div className="inputdiv">
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button onClick={inputHandler()}>Shoot</button>
      </div>
      <h1>{input}</h1>
      <div className="container">
        <div className="boxdiv">
          <div className="circle1">1</div>
          <div className="circle2">2</div>
          <div className="circle3">3</div>
          <div className="circle4">4</div>
          <div className="circle5">5</div>
        </div>
        <div className="circle_main_div">
          <Circlediv1>1</Circlediv1>
          <Circlediv2>2</Circlediv2>
          <Circlediv3>3</Circlediv3>
          <Circlediv4>4</Circlediv4>
          <Circlediv5>5</Circlediv5>
        </div>
      </div>
    </div>
  );
};

export default Baloon;
