import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/Start'
import Game from './components/Game'

function App() {
  const [isPlayed, setIsPlayed] = useState(false)
  const handleIsPlayed = () =>{
    console.log('hi')
    setIsPlayed(true)
  }

  return (
    <>
      {!isPlayed ?<Start handlePlay = {handleIsPlayed} isPlayed = {isPlayed}/> :<Game/> }
      
    </>
  )
}

export default App
