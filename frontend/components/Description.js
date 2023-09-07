import React from "react";
import Footer from './Footer'
import styled from 'styled-components'
const StyledDescription = styled.div`
width: 1000px;
display: flex;
flex-direction: column;
justify-content: center;

h3{
  width: 1000px;
  display:flex;
  justify-content: center;
  color: blue;
  margin-bottom: 50px;
}

#explanation {
  color: red;
  width: 500px;
  margin-left:280px;
}
`
 export default function description({title,description,date,authors}){
  return (
    <StyledDescription className="description">
    <h3>{title}</h3>
    <p id='explanation'>
      {description}
    </p>
    <footer id='footer'>
         <p>This photo was taken on {date}</p>
         <p>This photo is protected under copyright law</p>
         <p>{authors}, have all right to the above photo</p>
       </footer>
       <Footer date={date} authors={authors}/>
 </StyledDescription>

  )
}
