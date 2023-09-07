import React from "react";

export default function Footer({date,authors}){
return (
    <footer id='footer'>
    <p>This photo was taken on {date}</p>
    <p>This photo is protected under copyright law</p>
    <p>{authors}, have all right to the above photo</p>
  </footer>
)
}
