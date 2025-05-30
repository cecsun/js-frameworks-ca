import React, { useState } from 'react';
import * as S from './index.styles';

/**
 * ContactPage component provides a contact form for users to send a message.
 * It includes input fields for full name, subject, email, and message, and 
 * displays a confirmation message upon successful submission.
 *
 * @component
 * @returns {JSX.Element} The rendered contact form page.
 */
function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmit, setFormSubmit] = useState('');

  /**
   * Handles the form submission event.
   * Simulates an API request, logs the form data, resets fields, and shows a confirmation.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
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
      }, 4000);
    }, 500);
  }

  /**
   * Handles changes to text input fields and updates the corresponding state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
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
    <S.Container>
      <S.FormWrapper>
        <S.Heading>Contact us</S.Heading>
        <S.Form onSubmit={onFormSubmit}>
          <div>
            <S.Label htmlFor="full-name">Full name</S.Label>
            <S.Input
              name="full-name"
              value={fullName}
              placeholder="Your full name"
              onChange={onTextInputChange}
              required
              minLength="3"
            />
          </div>
          <div>
            <S.Label htmlFor="subject">Subject</S.Label>
            <S.Input
              name="subject"
              value={subject}
              placeholder="Subject of your message"
              onChange={onTextInputChange}
              required
              minLength="3"
            />
          </div>
          <div>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              name="email"
              value={email}
              type="email"
              placeholder="Your email"
              onChange={onTextInputChange}
              required
            />
          </div>
          <div>
            <S.Label htmlFor="message">Message</S.Label>
            <S.Input
              name="message"
              value={message}
              placeholder="Your message"
              onChange={onTextInputChange}
              required
              minLength="3"
            />
          </div>
          <S.Button>Submit</S.Button>
        </S.Form>
        {formSubmit && <S.Message>{formSubmit}</S.Message>}
      </S.FormWrapper>
    </S.Container>
  );
}

export default ContactPage;
