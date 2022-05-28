import React, { useState } from "react";
import "./baloon.css";
import styled from "styled-components";

const Balloon = () => {
  const [input, setInput] = useState(0);
  const [cir1, setCir1] = useState("block");
  const [cir2, setCir2] = useState("block");
  const [cir3, setCir3] = useState("block");
  const [cir4, setCir4] = useState("block");
  const [cir5, setCir5] = useState("block");
  const [cir11, setCir11] = useState("none");
  const [cir22, setCir22] = useState("none");
  const [cir33, setCir33] = useState("none");
  const [cir44, setCir44] = useState("none");
  const [cir55, setCir55] = useState("none");
  //////right div////////
  const Circlediv1 = styled.div`
    background-color: #d5e8d4;
    border: 2px solid #c1d4bb;
    display: ${cir1};
  `;
  const Circlediv2 = styled.div`
    background-color: #ffe6cd;
    border: 2px solid #c9b378;
    display: ${cir2};
  `;
  const Circlediv3 = styled.div`
    background-color: #6a00ff;
    border: 2px solid #804dc6;
    display: ${cir3};
  `;
  const Circlediv4 = styled.div`
    background-color: #d9e8fb;
    border: 2px solid #b0bdcd;
    display: ${cir4};
  `;
  const Circlediv5 = styled.div`
    background-color: #e2d5e7;
    border: 2px solid #c9bccd;
    display: ${cir5};
  `;

  //////left div////////
  const Circlediv11 = styled.div`
    background-color: #d5e8d4;
    border: 2px solid #c1d4bb;
    display: ${cir11};
  `;
  const Circlediv22 = styled.div`
    background-color: #ffe6cd;
    border: 2px solid #c9b378;
    display: ${cir22};
  `;
  const Circlediv33 = styled.div`
    background-color: #6a00ff;
    border: 2px solid #804dc6;
    display: ${cir33};
  `;
  const Circlediv44 = styled.div`
    background-color: #d9e8fb;
    border: 2px solid #b0bdcd;
    display: ${cir44};
  `;
  const Circlediv55 = styled.div`
    background-color: #e2d5e7;
    border: 2px solid #c9bccd;
    display: ${cir55};
  `;

  const inputHandler = () => {
    console.log(input);

    if (input == 1) {
      setCir1("none");
      setCir11("block");
    } else if (input == 2) {
      setCir2("none");
      setCir22("block");
    } else if (input == 3) {
      setCir3("none");
      setCir33("block");
    } else if (input == 4) {
      setCir4("none");
      setCir44("block");
    } else if (input == 5) {
      setCir5("none");
      setCir55("block");
    }
  };

  const reversehandler = (value) => {
    console.log("hi");
    if (value == 1) {
      setCir11("none");
      setCir1("block");
    } else if (value == 2) {
      setCir22("none");
      setCir2("block");
    } else if (value == 3) {
      setCir33("none");
      setCir3("block");
    } else if (value == 4) {
      setCir44("none");
      setCir4("block");
    } else if (value == 5) {
      setCir55("none");
      setCir5("block");
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
