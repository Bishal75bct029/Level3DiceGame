import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Rules from './Rules'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    img{
        width: 250px;
        height: 301px;
        cursor: pointer;
    }
    
`
const Dice = ({diceClick,count,setCount,randomNum})=>{
    const [showRules,setShowRules] = useState(false);

    const toggleShowRules =() =>{
        setShowRules(!showRules)
    }

return (
        <Container>
            <img src={`../images/dice_${randomNum}.png`} alt="" onClick={diceClick}/>
            <h2 className={{marginTop:'-8px'}}>Click On The Dice To Roll</h2>
            <Button isDark ={true} value ={'Reset Score'}  reset = {true} setCount = {setCount}/>
            <Button isDark ={showRules ?false:true} value ={showRules ? 'Hide Rules': 'Show Rules'} reset = {false} setShowRules = {setShowRules}/>

            {showRules && (<Rules/>)}
        </Container>
    )
}

export default Dice;
