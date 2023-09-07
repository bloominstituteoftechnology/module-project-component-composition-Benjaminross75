import React from "react"
import Description from './Description'
import styled from 'styled-components';

const StyledCard = styled.div`
background-color: lightyellow;
width: 100%

margin: 20px;
h2{
   width: 1000px;
   display:flex;
   justify-content: center;
   color: blue;
}

img{
   margin:50px;
   width: 700px;
   height: 300px;
   display: flex;
   justify-content: center;
   padding-left:200px;
}

`
export default function Card({imageURL, title, description,date,authors}){
    return( <StyledCard className='header'>
       <h2>EXPLORE OUR GALAXY!</h2>
       <img src={imageURL}/>
        <Description title={title} description={description} date={date} authors={authors}/>


     </StyledCard>
    )
   }
