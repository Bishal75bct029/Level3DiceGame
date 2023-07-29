import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    max-width:794px;
    max-height: 208px;
    background-color: #FBF1F1;
    margin: auto;
    padding: 20px;

    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
    }
    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }
`

const Rules = () => {
  return (
    <Container>
        <h2>How to play dice game?</h2>
        <p>- Select any number</p>
        <p>- Click on dice image</p>
        <p>- After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>- If you get wrong guess then  2 point will be dedcuted </p>
    </Container>
  )
}

export default Rules