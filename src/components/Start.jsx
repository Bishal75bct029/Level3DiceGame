import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';


const Container = styled.div `
  display:flex;
  max-width: 1182px;
  max-height: 522px;
  justify-content: center;
  align-items: center;

  img{
    height:522px ;
    width:649px ;
  }

`

const Box = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 528px;
  max-height: 188px;
  justify-content: center;
  align-items: flex-end;

  h1{
    font-weight: 700;
    letter-spacing: -1px;
    font-size: 96px;
    line-height: 144px;
    white-space: nowrap;
  }
`

const Start = (props) => {
  return (
    <Box>
      <Container>
        <img src="../public/images/dices 1.png" alt="Dice" />
        <Text>
          <h1>DICE GAME</h1>
          <Button value = {"Play Now"} isDark = {true} startGame = {props.handlePlay} isPlayed = {props.isPlayed}/>
        </Text>

      </Container>
        
    </Box>
  )
}

export default Start