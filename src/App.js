import "./index.css";
import React from "react";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    job: "",
    jobDesc: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector(".fullName").innerHTML =
      `${formData.firstName}` || `${formData.lastName}`
        ? `${formData.firstName} ${formData.lastName}`
        : "Full Name";
    document.querySelector(".title").innerHTML = `${formData.job}`
      ? `${formData.job}`
      : "Job Title";
    document.querySelector(".email").innerHTML = `${formData.email}`
      ? `${formData.email}`
      : "Your Email";
    document.querySelector(".jobDesc").innerHTML = `${formData.jobDesc}`
      ? `${formData.jobDesc}`
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime  mollitia, molestiae quas vel sint commodi repudiandae consequuntur.";

    var a = document.getElementById("anc");
    a.href = `//${formData.website}`;

    var firstLetter = `${formData.firstName.slice(0, 1)}`;
    var lastLetter = `${formData.lastName.slice(0, 1)}`;

    var initials = firstLetter + lastLetter;

    document.querySelector(".initials").innerText = `${initials}`;
  }

  // function web() {
  //   document.querySelector('#anc').getAttribute("href") = `${formData.website}`
  // }
  return (
    <div id="main">
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <Card />
    </div>
  );
}

export default App;
