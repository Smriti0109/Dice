import React from 'react'
import styled from 'styled-components'
const TotalNumber = ({score}) => {
  return (
    <TotalNum>
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalNum>
  )
}

const TotalNum = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 100px;
}
p{
    font-size: 24px;
    font-weight: 500px;
}
`;
export default TotalNumber