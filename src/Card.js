import React from "react";

export default function Card(props) {
  return (
    <div className="main">
      <header>
        <div className="img-div">
          <h2 className="initials"></h2>
        </div>
        <h1 className="fullName">Full Name</h1>
        <p className="title">Job Title</p>
        <p className="email">Your Email</p>
        <button className="btn">
          <a rel="noopener noreferrer" target="_blank" id="anc" href="xx">
            Website
          </a>
        </button>
      </header>

      <div className="about">
        <h2>Job Description</h2>
        <p className="jobDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        </p>
      </div>
    </div>
  );
}
