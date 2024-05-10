import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";

function App() {

  const [isStart,setStart]=useState(false);

  const setToggle=()=>{
    setStart(!isStart)
  }
  return (
    <>
    {isStart? <GamePlay/> : <StartGame toggle={setToggle}/>  }
    </>
  )
}

export default App
