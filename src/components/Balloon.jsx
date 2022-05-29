import React, { useState, useEffect } from "react";
import "./balloon.css";
import styled from "styled-components";

const Balloon = () => {
  let colors = ["#d5e8d4", "#ffe6cd", "#6a00ff", "#d9e8fb", "#e2d5e7"];
  let randomColor = colors.sort((a, b) => 0.5 - Math.random());
  const [input, setInput] = useState(0);
  const [cir1, setCir1] = useState(true);
  const [cir2, setCir2] = useState(true);
  const [cir3, setCir3] = useState(true);
  const [cir4, setCir4] = useState(true);
  const [cir5, setCir5] = useState(true);
  const [colorsArray, setcolorsArray] = useState(randomColor);

  const Circlediv1 = styled.div`
    background-color: ${colorsArray[0]};
    display: ${cir1 ? "block" : "none"};
  `;
  const Circlediv2 = styled.div`
    background-color: ${colorsArray[1]};
    display: ${cir2 ? "block" : "none"};
  `;
  const Circlediv3 = styled.div`
    background-color: ${colorsArray[2]};
    display: ${cir3 ? "block" : "none"};
  `;
  const Circlediv4 = styled.div`
    background-color: ${colorsArray[3]};
    display: ${cir4 ? "block" : "none"};
  `;
  const Circlediv5 = styled.div`
    background-color: ${colorsArray[4]};
    display: ${cir5 ? "block" : "none"};
  `;

  //////left div////////
  const Circlediv11 = styled.div`
    background-color: ${colorsArray[0]};
    display: ${cir1 ? "none" : "block"};
  `;
  const Circlediv22 = styled.div`
    background-color: ${colorsArray[1]};
    display: ${cir2 ? "none" : "block"};
  `;
  const Circlediv33 = styled.div`
    background-color: ${colorsArray[2]};
    display: ${cir3 ? "none" : "block"};
  `;
  const Circlediv44 = styled.div`
    background-color: ${colorsArray[3]};
    display: ${cir4 ? "none" : "block"};
  `;
  const Circlediv55 = styled.div`
    background-color: ${colorsArray[4]};
    display: ${cir5 ? "none" : "block"};
  `;

  const inputHandler = () => {
    console.log(input);

    if (input == 1) {
      setCir1(false);
    } else if (input == 2) {
      setCir2(false);
    } else if (input == 3) {
      setCir3(false);
    } else if (input == 4) {
      setCir4(false);
    } else if (input == 5) {
      setCir5(false);
    }
  };

  const reversehandler = (value) => {
    console.log("hi");
    if (value == 1) {
      setCir1(true);
    } else if (value == 2) {
      setCir2(true);
    } else if (value == 3) {
      setCir3(true);
    } else if (value == 4) {
      setCir4(true);
    } else if (value == 5) {
      setCir5(true);
    }
  };

  return (
    <div>
      <div className="inputdiv">
        <input
          type="number"
          placeholder="type balloon number.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => inputHandler()}>Shoot</button>
      </div>

      <div className="container">
        <div className="boxdiv">
          <Circlediv11 onClick={() => reversehandler(1)}></Circlediv11>
          <Circlediv22 onClick={() => reversehandler(2)}></Circlediv22>
          <Circlediv33 onClick={() => reversehandler(3)}></Circlediv33>
          <Circlediv44 onClick={() => reversehandler(4)}></Circlediv44>
          <Circlediv55 onClick={() => reversehandler(5)}></Circlediv55>
        </div>
        <div className="circle_main_div">
          <Circlediv1></Circlediv1>
          <Circlediv2></Circlediv2>
          <Circlediv3></Circlediv3>
          <Circlediv4></Circlediv4>
          <Circlediv5></Circlediv5>
        </div>
      </div>
    </div>
  );
};

export default Balloon;
