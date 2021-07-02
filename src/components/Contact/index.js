import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (

    <section id="contact-section">
      <h2>GET IN TOUCH</h2>
      <br></br>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME : </label>
          <br></br>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">EMAIL : </label>
          <br></br>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">MESSAGE : </label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" id="submitBtn">SUBMIT</button>
      </form>
    </section>
  );
}

export default Contact;
