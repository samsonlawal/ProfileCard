import React from "react";

export default function Form(props) {
  return (
    <div className="form-div">
      <h1>Form</h1>

      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={props.handleChange}
          name="firstName"
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={props.handleChange}
          name="lastName"
        />

        <input
          type="text"
          placeholder="Email"
          onChange={props.handleChange}
          name="email"
        />

        <input
          type="text"
          placeholder="www.website.com"
          onChange={props.handleChange}
          name="website"
        />

        <input
          type="text"
          className="job"
          placeholder="Job/Role"
          onChange={props.handleChange}
          name="job"
        />

        <textarea
          type="text"
          className="job-desc"
          placeholder="Job Description"
          onChange={props.handleChange}
          name="jobDesc"
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
