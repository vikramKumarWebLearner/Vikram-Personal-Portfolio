import React from "react";
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uqsjhp', 'template_19ipvxh', form.current, 'JbqN3rPGqZkxA7iSB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get  In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>hellovikram03@gmail.com</h5>
            <a href="mailto:hellovikram03@gmail.com" target="__blank">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icons" />
            <h4>Messenger</h4>
            <h5>Vikram kumar</h5>
            <a href="https://m.me/vikram choudhary" target="__blank">Send a message</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icons" />
            <h4>WhatsApp</h4>
            <h5>+916351354117</h5>
            <a href="https://api.whatsapp.com/send?phone=6351354117" target="__blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your  Full  Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )

}
export default Contact;