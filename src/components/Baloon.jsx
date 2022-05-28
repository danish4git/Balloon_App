import React, { useState } from "react";
import "./baloon.css";

const Baloon = () => {
  const [input, setInput] = useState(0);

  const circlediv1 = styled.div`
background-color: #d5e8d4,
border: 2px solid #c1d4bb,
width: 100px;
  height: 100px,
  border-radius: 50%,

`;
  const circlediv2 = styled.div`
background-color: #ffe6cd,
border: 2px solid #c9b378,
width: 100px;
  height: 100px,
  border-radius: 50%,

`;
  const circlediv3 = styled.div`
background-color: #6a00ff,
border: 2px solid #804dc6,
width: 100px,
  height: 100px,
  border-radius: 50%
`;
  const circlediv4 = styled.div`
background-color: #d9e8fb,
  border: 2px solid #b0bdcd,
  width: 100px,
  height: 100px,
  border-radius: 50%

`;
  const circlediv5 = styled.div`
background-color: #e2d5e7,
  border: 2px solid #c9bccd,
  width: 100px,
  height: 100px,
  border-radius: 50%,

`;

  return (
    <div>
      <div className="inputdiv">
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button>Shoot</button>
      </div>
      <h1>{input}</h1>
      <div className="container">
        <div className="boxdiv">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
        </div>
        <div className="circle_main_div">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
        </div>
      </div>
    </div>
  );
};

export default Baloon;
