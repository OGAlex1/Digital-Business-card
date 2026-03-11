import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <a href="mailto:paul@example.com">Email</a>
      <a href="https://linkedin.com/in/paul" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/paul" target="_blank">Twitter</a>
    </div>
  );
}
