import { useState } from "react";
import classes from "./contactform.module.css";

export function ContactForm() {
  const [addEmail, setEmail] = useState("");
  const [addName, setName] = useState("");
  const [addMessage, setMessage] = useState("");

  function sendMessageHandle(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: addEmail,
        name: addName,
        message: addMessage,
      }),
    });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <from className={classes.form} onSubmit={sendMessageHandle}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={addEmail}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={addName}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            id="message"
            value={addMessage}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </from>
    </section>
  );
}
