import React, { useState } from 'react'
import TotalNumber from './TotalNumber'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore] = useState(0)
  const [selectNum,setSelectNum] = useState();
  const [currentDice,setCurentDice] = useState(1);

  const [error,setError]=useState("");

  const [showRules,setShowRules]= useState(false)

  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random() * (max - min )+ min);
};


const rolDice=()=>{
  if(!selectNum){
    setError("You have not selected any number");
    return;
  }
    const randomNumber = generateRandomNumber(1,7);
    setCurentDice((prev)=>randomNumber);

    

    if(selectNum==randomNumber){
      setScore((prev)=>prev+1);
    }
    else{
      setScore((prev)=>prev-1);
    }

    setSelectNum(undefined);
};


const resetScore=()=>{
  setScore(0);
}
  return (
    <MainCon>
      <div className='top-section'>
        <TotalNumber
        score={score}/>
        <NumberSelector
        setError={setError}
        error={error}
        selectNum={selectNum}
        setSelectNum={setSelectNum}

        />
        </div>
        <RoleDice
        currentDice={currentDice}
        rolDice={rolDice}
        />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{
            showRules? "Hide ":"Show "
            } Rules</Button>

        </div>
        {showRules && <Rules/>}
    </MainCon>
  )
}


export default GamePlay

const MainCon=styled.main`
padding-top: 70px;
.top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;