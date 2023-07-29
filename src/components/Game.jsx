import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import Dice from "./Dice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  max-height: 151px;
  margin-left: 80px;
  margin-top: 64px;
  margin-right: 80px;

  .score {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .count {
    width: 62px;
    height: 112px;
    font-weight: 600;
    font-size: 80px;
  }

  .label {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
  }

  .box {
    display: flex;
    width: 552px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    justify-content: space-between;
  }

  .outerbox{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Game = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [checkClick, setClick] = useState(false)
  const [clickedValue, setClickedValue] = useState(undefined)
  const [count,setCount] = useState(0)
  const [isDiceClicked, setDiceClick] = useState(false)
  const [randomNum, setRandomNum] =useState(1)

  const diceClick = () =>{
    let randomNumber = Math.floor(Math.random() * 6 + 1) 
    setRandomNum(randomNumber)
    setDiceClick(true)
    console.log(clickedValue)
    if(checkClick){

        if (randomNumber == clickedValue){
            
            setCount(count => count + 2)
        }else{
            setCount(count =>count - 1)
        }
    }else{

    }
  }
  
  const toggleCheckClick = (value) =>{
    console.log(value,"value")
    setClick(true)
    console.log(checkClick)
    setClickedValue(value + 1)
    console.log(clickedValue,'I am clicked')
  }
  console.log("rerendered")
  const valueClicked = (index) =>{
  }


  return (
    <>
   {!checkClick && isDiceClicked && (
  <p
    style={{
      color: 'red',
      float: 'right',
      width: '300px',
      fontWeight: '600',
      position: 'absolute',
      top: '15px',
      right: '40px',
    }}
  >
    Please Select the element First
  </p>
)}
      <Container>
        <div className="score">
          <span className="count">{count}</span>
          <span className="label">Total Score</span>
        </div>

        <div className="outerbox">
          <div className="box">
            {numbers.map((number, index) => {
              return <Box value={number} key={index} isSelected = {clickedValue === index + 1} onclick = {() => toggleCheckClick(number -1 )}/>;
            })}
          </div>
          <h2>Select Numbers</h2>
        </div>
      </Container>

      <Dice diceClick = {diceClick} count = {count} setCount = {setCount} randomNum = {randomNum}/>
    </>
  );
};

export default Game;
