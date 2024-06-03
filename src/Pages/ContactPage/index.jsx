// import React from "react";

// function Contact() {
//     return <div>ContactPage</div>
//   }

// export default Contact;

import React, { useState } from 'react';

function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmit, setFormSubmit] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      fullName,
      subject,
      email,
      message,
    };
  
    setTimeout(() => {
      console.log('Form submitted:', body);
      setFormSubmit('Message sent!');
      setFullName('');
      setSubject('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setFormSubmit('');
      }, 2000);
    }, 500);
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'full-name') {
      setFullName(value);
    }
    if (name === 'subject') {
      setSubject(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="full-name">Full name</label>
          <input
            name="full-name"
            value={fullName}
            placeholder="Your full name"
            onChange={onTextInputChange}
            required
            minLength="3"
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={onTextInputChange}
            required
            minLength="3"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            placeholder="Your email"
            onChange={onTextInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            name="message"
            value={message}
            placeholder="Your message"
            onChange={onTextInputChange}
            required
            minLength="3"
          />
        </div>
        <button>Submit</button>
      </form>
      {formSubmit && <div>{formSubmit}</div>}
    </div>
  );
}

export default ContactPage;