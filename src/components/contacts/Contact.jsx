import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kwv14fh",
        "template_uwgderl",
        form.current,
        "ZJS7n3Hxf7FBYRgg_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>essam2715@gmail.com</h5>
            <a href="mailto:essam2715@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messrnger</h4>
            <h5>Essam Salah</h5>
            <a href="https://m.me/essam2715">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>01146035375</h5>
            <a href="https://api.whatsapp.com/send?phone=01146035375">
              Send a Message
            </a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email " required />
          <textarea
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
