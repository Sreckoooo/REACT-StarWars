import React from "react";
import Yoda from "../assets/yoda.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Yoda})` }}
      ></div>
      <div className="rightSide">
        <h1> Kontaktiraj Nas</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Ime</label>
          <input name="name" placeholder="Vnesi ime..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Vnesi email..." type="email" />
          <label htmlFor="message">Sporočilo</label>
          <textarea
            rows="6"
            placeholder="Napiši sporočilo..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Pošlji</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;