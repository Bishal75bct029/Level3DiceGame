import React from 'react'
import { styled } from 'styled-components'

const Boxno = styled.div`
    display: flex;
    width: 72px;
    height: 72px;
    border: 1px solid black;
    justify-content: center;
    background-color:${props=> props.isSelected ? 'black':'white'};
    color:${props=> (!props.isSelected ? 'black': 'white')};
    cursor: pointer;
    align-items: center;
`
const Box = (props) => {
  return (
    <Boxno onClick={props.onclick} isSelected = {props.isSelected}>
        {props.value}
    </Boxno>
  )

}

export default Box