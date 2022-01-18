import React from "react";
import Links from "./Links";

function doesBioExist(bio){
  if (bio){
    return <p>{bio}</p>
  }
    else return null
}
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {doesBioExist(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin = {props.linkedin} />
    </div>
  );
}

export default About;
