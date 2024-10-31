import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmailMessage", "template_gg2wsr8", form.current, "MYAVpFnIvP3xcYW5d")
      .then(
        (response) => {
          console.log('SUCCESS!',response.status);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs