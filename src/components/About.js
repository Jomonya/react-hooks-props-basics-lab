import React from "react";
import Link from "./Link"

function About(props) {
  function bio() {
    if (props.bio) {
      return <p>{props.bio}</p>
    } else {
      return
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio()}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Link github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
