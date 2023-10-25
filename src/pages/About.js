import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import me from "../assets/moi_github.jpg";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    const imageStyle = {
      height: '38vh',
    };
    const textStyle = {
      maxWidth: '60vh',
      padding: 0, 
      listStyle: 'none'
    };
    const listItemStyle = {
      display: 'flex',
      alignItems: 'flex-start',
      paddingBottom: '0.5rem',
    };
    return (
      <div>
        <div className="sidebar">
          <Link className="nav-link" to="/">
            <img src={logo} alt="This is my favicon." />
          </Link>
        </div>
        <div className="content">
          <h1>About me</h1>
          <img src={me} alt="My head from behind." style={imageStyle} />
          <ul style={textStyle}>
            <li style={listItemStyle}><span style={{ paddingRight: '0.5rem' }}>①</span> My name is Julia Zimmermann.</li>
            <li style={listItemStyle}><span style={{ paddingRight: '0.5rem' }}>②</span> I am an open-source & open-data enthusiast, newbie speaker, and prototyper.</li>
            <li style={listItemStyle}><span style={{ paddingRight: '0.5rem' }}>③</span> I was born and raised in Dresden but lived and loved in Berlin before I found my love in nature and traveled the world.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
