import React from "react";
import Links from './Links'; // Import Links component
const  About = ( { bio, github, linkedin}) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {bio && <p>{bio}</p>} {/* Conditionally render the bio */}
      </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Pass down links  */}
    </div>

  );
}

export default About;
