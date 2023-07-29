import React, { useState } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    height: ${ props => (props.height || 50)}px;
    width: ${ props=> (props.width || 200)}px;
    background-color:${props=> props.isDark ? 'black':'white'};
    color:${props=> (!props.isDark ? 'black': 'white')};
    border:${props=> (!props.isDark ? '1px solid black': 'none')};
    /* border: none; */
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 18px 10px 18px;
    font-size:16px;
    font-weight: 600;

    &:hover{
        background-color:${props=> (!props.isDark ? 'black': 'white')};
        color:${props=> (props.isDark ? 'black': 'white')};
        border:${props=> (props.isDark ? '1px solid black': 'none')};

    }

`

const Button = (props) => {
    const isDark = props.isDark
    // console.log(props.isDark)
    // console.log(props)
    const handleReset =() =>{
      if(!props.isPlayed){
        props.startGame()
        return
      }
      if(props.reset){
        props.setCount(0)
      }
      else{
        props.setShowRules(value=>!value)

      }
    }
    
  return (
    <Btn isDark = {props.isDark} height = {props.height} width = {props.width} onClick = {handleReset}>
        {props.value}
    </Btn>
  )
}

export default Button